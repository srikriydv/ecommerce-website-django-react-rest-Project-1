from django.db import models
from django.db.models import Count
from django.contrib.auth.models import User
import datetime

# Create your models here.
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True, null=True)
    profile_img=models.ImageField(upload_to='profile_img/', null=True)
    address = models.TextField(null=True)

    def __str__(self):
        return self.user.username
    
    #fetch daily order
    @property
    def show_chart_daily_orders(self):
        orders = OrderItems.objects.filter(product__vendor = self).values('order__order_time__date').annotate(Count('id'))
        dataList = []
        countList = []
        dataSet = {}

        if orders:
            for order in orders:
                print(order)
                dataList.append(order['order__order_time__date'])
                countList.append(order['id__count'])
                print(dataList)
                print(countList)
        dataSet = {'dates':dataList, 'data':countList}
        return dataSet

    #fetch Monthly order
    @property
    def show_chart_monthly_orders(self):
        orders = OrderItems.objects.filter(product__vendor = self).values('order__order_time__month').annotate(Count('id'))
        dataList = []
        countList = []
        dataSet = {}

        if orders:
            for order in orders:
                print(order)
                monthinteger = order['order__order_time__month']
                month = datetime.date(1900, monthinteger, 1).strftime('%B')
                dataList.append(month)
                countList.append(order['id__count'])
                print(dataList)
                print(countList)
        dataSet = {'dates':dataList, 'data':countList}
        return dataSet
    
    #fetch Yearly order
    @property
    def show_chart_yearly_orders(self):
        orders = OrderItems.objects.filter(product__vendor = self).values('order__order_time__year').annotate(Count('id'))
        dataList = []
        countList = []
        dataSet = {}

        if orders:
            for order in orders:
                print(order)
                yearinteger = order['order__order_time__year']
                year = datetime.date(yearinteger, 1, 1).strftime('%Y')
                dataList.append(year)
                countList.append(order['id__count'])
                print(dataList)
                print(countList)
        dataSet = {'dates':dataList, 'data':countList}
        return dataSet

# Product Category
class ProductCategory(models.Model):

    title = models.CharField(max_length=200)
    details = models.TextField(null=True)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = 'Product Catagories'
    
# Product
class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null = True, related_name='category_products')
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    slug = models.CharField(max_length=300, unique=True, null=True)
    detail = models.TextField(null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    tags = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='product_imgs/', null=True)
    demo_url = models.URLField(null=True, blank=True)
    product_file = models.FileField(upload_to='product_file/', null=True)
    downloads = models.IntegerField(default=0, null=True)
    publish_status = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
    def tag_list(self):
        if self.tags:
            return self.tags.split(',')
        return []
    

    
# Customer Model
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)
    profile_img=models.ImageField(upload_to='profile_img/', null=True)

    def __str__(self):
        return self.user.username
    
# Order Model
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)
    payment_status = models.BooleanField(default=False)

    def __str__(self):
        return f"Order {self.id} by {self.customer.user.username}"

# Order Item Model
class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    qty = models.IntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    order_status = models.BooleanField(default=False)
    
    
    def __str__(self):
        return self.product.title
    
    class Meta:
        verbose_name_plural = 'Order Items'
    
# Customer Address Model
class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_addresses')
    address = models.TextField()
    default_address = models.BooleanField(default=False)

    def __str__(self):
        return self.address
    
    class Meta:
        verbose_name_plural = 'Customer Addresses'
    
# Product Rating and Reviews
class ProductRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customers_rating')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_ratings')
    rating = models.IntegerField()
    review = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.review}'
    
# Product Images Model
class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_imgs')
    image = models.ImageField(upload_to='product_img/', null=True)
    
    def __str__(self):
        return self.image.url
    
# WishList
class Wishlist(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Wish List'
    
    def __str__(self):
        return f"{self.product.title} - {self.customer.user.first_name}"