from . import serializers
from rest_framework import generics, permissions, pagination, viewsets, status
from . import models
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db import IntegrityError
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from django.db.models import Count

# vendor View
class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        
        if 'fetch_limit' in self.request.GET:
            limit = int(self.request.GET['fetch_limit'])
            qs = qs.annotate(downloads=Count('product'))
            print(qs)
            qs = qs.order_by('-downloads', '-id')
            print(qs)
            qs = qs[:limit]

        return qs

class vendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer

class vendorCustomers(generics.ListAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.CustomerSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        vendor_id = self.kwargs['pk']
        qs = qs.filter(product__vendor_id=vendor_id)
        # customer = models.Customer.objects.filter(id = )
        customer_ids = qs.values_list('order__customer_id', flat=True).distinct()

        # Filter and return the customers based on these IDs
        customers = models.Customer.objects.filter(id__in=customer_ids)

        return customers
    
class VendorCustomerOrderlist(generics.ListCreateAPIView, generics.DestroyAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderItemSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        vendor_id = self.kwargs['vendor_id']
        customer_id = self.kwargs['customer_id']
        qs = qs.filter(product__vendor__id = vendor_id).filter(order__customer__id = customer_id)
        
        return qs
    
    def delete(self, request, *args, **kwargs):
        vendor_id = self.kwargs.get('vendor_id')
        customer_id = self.kwargs.get('customer_id')
        
        # Filter the objects to delete based on vendor_id and customer_id
        order_items = self.get_queryset()

        # If you want to delete all matching items:
        deleted, _ = order_items.delete()

        # Respond with appropriate status
        return Response({'deleted': deleted}, status=status.HTTP_204_NO_CONTENT)
    
@csrf_exempt
def vendor_update_password(request, vendor_id):
    password = request.POST.get('password')
    vendor = models.Vendor.objects.get(id=vendor_id)
    user = vendor.user
    user.password = make_password(password)
    user.save()
    msg = {'bool': True , 'msg' : 'Password has been changed'}
    return JsonResponse(msg)

    
# Vendor Dashboard
@csrf_exempt
def vendor_dashboard(request, pk):
    totalProducts = models.Product.objects.filter(vendor__id=pk).count()
    totalOrders = models.OrderItems.objects.filter(product__vendor__id=pk).count()
    totalCustomers = models.OrderItems.objects.filter(product__vendor__id=pk).values('order__customer').distinct().count()
    msg={
        'totalProducts':totalProducts,
        'totalOrders':totalOrders,
        'totalCustomers':totalCustomers
    }
    return JsonResponse(msg)

@csrf_exempt
def vendor_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    print(f"Attempting to authenticate user: {username}")
    user = authenticate(username=username, password=password)
    if user:
        vendor = models.Vendor.objects.get(user=user)
        msg={
            'id':vendor.id,
            'bool':True,
            'user':user.username
        }
    else:
        msg={
            'bool':False,
            'msg':'Invalid Username/Password!!'
        }
    return JsonResponse(msg)

@csrf_exempt
def vendor_register(request):
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    username = request.POST.get('username')
    email = request.POST.get('email')
    mobile = request.POST.get('mobile')
    address = request.POST.get('address')
    if not mobile:
        return JsonResponse({'error': 'Mobile number is required'}, status=400)
    password = request.POST.get('password')
    if models.Customer.objects.filter(mobile=mobile).exists():
        return JsonResponse({
            'bool': False,
            'msg': 'Mobile already exists!!'
        }, status=400)
    try:
        user = User.objects.create(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=password,
        )
        user.set_password(password)
        user.save()
        if user:
            try:
                vendor=models.Vendor.objects.create(
                    user=user,
                    mobile=mobile,
                    address=address,
                )
                msg={
                    'bool':True,
                    'user':user.id,
                    'vendor':vendor.id,
                    'msg':'Thank you for your registration. You can login now',
                }
            except IntegrityError:
                msg={
                'bool':False,
                'msg':'Mobile already exist!!'
            }
        else:
            msg={
                'bool':False,
                'msg':'Oops something wrong!!'
            }
    except IntegrityError:
        msg={
                'bool':False,
                'msg':'Username already exist!!'
            }
    return JsonResponse(msg)

# Product View
class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    # pagination_class = pagination.LimitOffsetPagination

    def get_queryset(self):
        qs = super().get_queryset()
        category_id = self.request.GET.get('category')  # Safely get the 'category' parameter
        
        if category_id:
            try:
                category = models.ProductCategory.objects.get(id=category_id)
                qs = qs.filter(category=category)
            except models.ProductCategory.DoesNotExist:
                qs = qs.none()  # Return an empty queryset if the category does not exist
        
        if 'fetch_limit' in self.request.GET:
            limit = int(self.request.GET['fetch_limit'])
            qs = qs[:limit]

        if 'vendor_id' in self.request.GET:
            try:
                vendor_id = int(self.request.GET['vendor_id'])
                print(vendor_id)
                qs = qs.filter(vendor_id=vendor_id)
            except ValueError:
                pass  # Ignore invalid values for vendor_id

        if 'vendor_cat' in self.request.GET:
            try:
                vendor_cat = int(self.request.GET['vendor_cat'])
                # Correct: Filter products by vendor and category
                qs = models.Product.objects.filter(vendor_id = vendor_cat).distinct('category')

            except ValueError:
                pass

        if 'pop' in self.request.GET:
            limit = int(self.request.GET['pop'])
            qs = qs.order_by('-downloads', '-id')
            qs = qs[:limit]
        
        return qs

class TagProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    # pagination_class = pagination.LimitOffsetPagination

    def get_queryset(self):
        qs = super().get_queryset()
        tag = self.kwargs['tag']
        qs = qs.filter(tags__icontains=tag)
        return qs
    
class RelatedProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    # pagination_class = pagination.LimitOffsetPagination

    def get_queryset(self):
        qs = super().get_queryset()
        product_id = self.kwargs['pk']
        product = models.Product.objects.get(id=product_id)
        qs = qs.filter(category=product.category).exclude(id=product_id)
        return qs


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer

class ProductImage(generics.RetrieveUpdateDestroyAPIView, generics.ListCreateAPIView):
    queryset = models.ProductImage.objects.all()
    serializer_class = serializers.ProductImageSerializer

# Customers View
class CustomerList(generics.ListAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer
    # permission_classes = [permissions.IsAuthenticated]

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer

class CustomerUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer

@csrf_exempt
def customer_update_password(request, customer_id):
    password = request.POST.get('password')
    customer = models.Customer.objects.get(id=customer_id)
    user = customer.user
    user.password = make_password(password)
    user.save()
    msg = {'bool': True , 'msg' : 'Password has been changed'}
    return JsonResponse(msg)

@csrf_exempt
def customer_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    print(f"Attempting to authenticate user: {username}")
    user = authenticate(username=username, password=password)
    if user:
        customer = models.Customer.objects.get(user=user)
        msg={
            'id':customer.id,
            'bool':True,
            'user':user.username
        }
    else:
        msg={
            'bool':False,
            'msg':'Invalid Username/Password!!'
        }
    return JsonResponse(msg)

@csrf_exempt
def customer_register(request):
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    username = request.POST.get('username')
    email = request.POST.get('email')
    mobile = request.POST.get('mobile')
    if not mobile:
        return JsonResponse({'error': 'Mobile number is required'}, status=400)
    password = request.POST.get('password')
    if models.Customer.objects.filter(mobile=mobile).exists():
        return JsonResponse({
            'bool': False,
            'msg': 'Mobile already exists!!'
        }, status=400)
    try:
        user = User.objects.create(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=password,
        )
        user.set_password(password)
        user.save()
        if user:
            try:
                customer=models.Customer.objects.create(
                    user=user,
                    mobile=mobile
                )
                msg={
                    'bool':True,
                    'user':user.id,
                    'customer':customer.id,
                    'msg':'Thank you for your registration. You can login now',
                }
            except IntegrityError:
                msg={
                'bool':False,
                'msg':'Mobile already exist!!'
            }
        else:
            msg={
                'bool':False,
                'msg':'Oops something wrong!!'
            }
    except IntegrityError:
        msg={
                'bool':False,
                'msg':'Username already exist!!'
            }
    return JsonResponse(msg)

# Order View
class OrderList(generics.ListCreateAPIView, generics.DestroyAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # Log incoming data for debugging
        print("Incoming data:", self.request.data)
        
        # Use customer_id from the request data
        customer_id = self.request.data.get('customer')
        
        # Save the new order with the provided customer
        serializer.save(customer_id=customer_id)

    def delete(self):
        customer_id
        return qs

class OrderItemList(generics.ListCreateAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderItemSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        
        if 'vendor_id' in self.request.GET:
            try:
                vendor_id = int(self.request.GET['vendor_id'])
                print(vendor_id)
                qs = qs.filter(product__vendor__id=vendor_id)
            except ValueError:
                pass  # Ignore invalid values for vendor_id
        
        return qs
    
class UpdateOrderItemListStatus(generics.UpdateAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderItemSerializer

    def update(self, request, *args, **kwargs):
        order_id = kwargs.get('pk')
        order_status_str = kwargs.get('order_status').lower()

        # Convert 'true'/'false' string to boolean, handle invalid cases
        if order_status_str == 'true':
            order_status = True
        elif order_status_str == 'false':
            order_status = False
        else:
            return JsonResponse({
                'bool': False,
                'message': 'Invalid order status value. Use "true" or "false".'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Filter and update the order item status
            order_item = self.queryset.filter(id=order_id)
            if order_item.exists():
                order_item.update(order_status=order_status)
                # Return success response
                return JsonResponse({
                    'bool': order_status,
                    'message': 'Order status updated successfully.'
                }, status=status.HTTP_200_OK)
            else:
                # Order item not found
                return JsonResponse({
                    'bool': False,
                    'message': 'Order item not found.'
                }, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            # Return error response in case of exception
            return JsonResponse({
                'bool': False,
                'message': f'Error updating order status: {str(e)}'
            }, status=status.HTTP_400_BAD_REQUEST)


class CustomerOrderItemList(generics.ListAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.CustomOrderItemSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        customer_id = self.kwargs['pk']
 
        return qs.filter(order__customer__id=customer_id)


class OrderDetail(generics.ListAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id = self.kwargs['pk']
        order=models.Order.objects.get(id=order_id)
        order_items=models.OrderItems.objects.filter(order=order)
        return order_items
    
@csrf_exempt
def update_payment_status(request, order_id):
    if request.method == 'POST':
        updateRes = models.Order.objects.filter(id=order_id).update(payment_status=True)
        msg={
            'bool':False,
        }
        if updateRes:
            msg={
                'bool':True,
            }
    return JsonResponse(msg)

@csrf_exempt
def update_product_download_count(request, product_id):
    if request.method == 'POST':
        product = models.Product.objects.get(id=product_id)
        totalDownloads = product.downloads
        totalDownloads+=1
        if totalDownloads == 0:
            totalDownloads = 1
        updateRes = models.Product.objects.filter(id=product_id).update(downloads=totalDownloads)
        msg={
            'bool':False,
        }
        if updateRes:
            msg={
                'bool':True,
            }
    return JsonResponse(msg)

# Address Viewset
class CustomerAddressViewset(viewsets.ModelViewSet):
    serializer_class = serializers.CustomerAddressSerializer
    queryset = models.CustomerAddress.objects.all()
    
class CustomerAddressList(generics.ListAPIView):
    serializer_class = serializers.CustomerAddressSerializer
    queryset = models.CustomerAddress.objects.all()

    def get_queryset(self):
        qs = super().get_queryset()
        customer_id = self.kwargs['pk']
 
        return qs.filter(customer_id=customer_id).order_by('id')
    
@csrf_exempt
def mark_default_address(request, pk):
    if request.method == 'POST':
        customer_id = request.POST.get('customer')
        models.CustomerAddress.objects.filter(customer_id=customer_id).update(default_address=False)
        res = models.CustomerAddress.objects.filter(id=pk).update(default_address = True)
        msg={
            'bool':False,
        }
        if res:
            msg={
                'bool':True,
            }
    return JsonResponse(msg)


@csrf_exempt
def customer_dashboard(request, pk):
    totalOrders = models.Order.objects.filter(customer_id=pk).count()
    totalWishlists = models.Wishlist.objects.filter(customer_id=pk).count()
    totalAddress = models.CustomerAddress.objects.filter(customer_id=pk).count()
    msg={
        'totalOrders':totalOrders,
        'totalWishlists':totalWishlists,
        'totalAddress':totalAddress
    }
    return JsonResponse(msg)

# Product Rating Viewset
class ProductRatingViewset(viewsets.ModelViewSet):
    serializer_class = serializers.ProductRatingSerializer
    queryset = models.ProductRating.objects.all()

# Catagory View
class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        if 'popular' in self.request.GET:
            limit = int(self.request.GET['popular'])
            qs = qs.annotate(downloads=Count('category_products'))  # Use the correct related name
            print(qs.query)  # Debugging the SQL query
            qs = qs.order_by('-downloads', '-id')
            print(qs.query)  # Debugging the SQL query
            qs = qs[:limit]
        return qs

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer

# WishList
class WishList(generics.ListCreateAPIView):
    queryset = models.Wishlist.objects.all()
    serializer_class = serializers.WishlistSerializer

@csrf_exempt
def check_in_wishlist(request):
    if request.method == 'POST':
        product_id = request.POST.get('product')
        customer_id = request.POST.get('customer')
        checkWishlist = models.Wishlist.objects.filter(product_id=product_id,customer_id=customer_id).count()
        msg={
            'bool':False,
        }
        if checkWishlist > 0:
            msg={
                'bool':True,
            }
    return JsonResponse(msg)

class CustomerWishlistItems(generics.ListAPIView):
    queryset = models.Wishlist.objects.all()
    serializer_class = serializers.WishlistSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        customer_id = self.kwargs['pk']
 
        return qs.filter(customer__id=customer_id)
    
class CustomerRemoveWishlistItems(generics.DestroyAPIView):
    queryset = models.Wishlist.objects.all()
    serializer_class = serializers.WishlistSerializer

    def get_queryset(self):
        customer_id = self.kwargs['pk']
        wishlist_id = self.kwargs['id']
        return super().get_queryset().filter(customer__id=customer_id, id=wishlist_id)

    def destroy(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if queryset.exists():
            queryset.delete()
            return JsonResponse({"message": "Item removed successfully."}, status=200)
        else:
            return JsonResponse({"error": "Item not found."}, status=404)