from rest_framework import serializers
from . import models

# Vender Serializer
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id','user', 'address']
    
    def __init__(self, *args, **kwargs):
        super(VendorSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id', 'user', 'address']
    
    def __init__(self, *args, **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

# product Serializer
class ProductListSerializer(serializers.ModelSerializer):
    # vender = VenderSerializer()  # Use nested VenderSerializer
    product_ratings = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = models.Product
        fields = ['id', 'category', 'vendor', 'title', 'slug', 'tag_list', 'detail', 'image', 'price', 'product_ratings', 'demo_url','product_file','downloads','tags']
        # depth = 1

    def __init__(self, *args, **kwargs):
        super(ProductListSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductImage
        fields = ['id', 'product', 'image']

class ProductDetailSerializer(serializers.ModelSerializer):
    product_ratings = serializers.StringRelatedField(many=True, read_only=True)
    product_imgs = ProductImageSerializer(many=True, read_only=True)
    class Meta:
        model = models.Product
        fields = ['id', 'category', 'vendor', 'title', 'slug', 'tag_list', 'image', 'detail', 'price', 'product_ratings', 'product_imgs', 'demo_url', 'product_file','downloads']
        depth = 1

    def __init__(self, *args, **kwargs):
        super(ProductDetailSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id','username', 'first_name', 'last_name', 'email']

# Customer Serializer
class CustomerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = models.Customer
        fields = ['id','user', 'mobile','profile_img']
    
    def __init__(self, *args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','mobile','profile_img']

# Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id','customer','order_status']
    
    def __init__(self, *args, **kwargs):
        super(OrderSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderItemSerializer(serializers.ModelSerializer):
    # order = OrderSerializer()
    # product = ProductDetailSerializer()
    class Meta:
        model = models.OrderItems
        fields = ['id', 'order', 'product', 'qty', 'price']

class CustomOrderItemSerializer(serializers.ModelSerializer):
    order = OrderSerializer()
    product = ProductDetailSerializer()
    class Meta:
        model = models.OrderItems
        fields = ['id', 'order', 'product', 'qty', 'price']
    
class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['id', 'order', 'product']
    
    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

# Address Serializer
class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields = ['id', 'customer', 'address', 'default_address']
    
    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

# Rating Serializer
class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = ['id', 'customer', 'product', 'rating', 'reviews', 'add_time']
    
    def __init__(self, *args, **kwargs):
        super(ProductRatingSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

# Catagory Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title', 'details']
    
    def __init__(self, *args, **kwargs):
        super(CategorySerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id', 'title', 'details']
    
    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

# Wishlist Serializer
class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Wishlist
        fields = ['id','product', 'customer']
    
    def __init__(self, *args, **kwargs):
        super(WishlistSerializer, self).__init__(*args, **kwargs)

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['customer'] = CustomerSerializer(instance.customer).data
        response['product'] = ProductDetailSerializer(instance.product).data
        return response