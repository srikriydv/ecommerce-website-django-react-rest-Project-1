from django.contrib import admin
from . import models

# Register your models here.
class VenderAdmin(admin.ModelAdmin):
    list_display = ['id','get_username', 'mobile','address']
    def get_username(self,obj):
        return obj.user.username
admin.site.register(models.Vendor, VenderAdmin)
admin.site.register(models.Product)
admin.site.register(models.ProductCategory)

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['get_username', 'mobile']
    def get_username(self,obj):
        return obj.user.username
admin.site.register(models.Customer, CustomerAdmin)
admin.site.register(models.OrderItems)
class CustomerAddressAdmin(admin.ModelAdmin):
    list_display = ['id','customer','address','default_address']
admin.site.register(models.CustomerAddress, CustomerAddressAdmin)
admin.site.register(models.ProductRating)
admin.site.register(models.ProductImage)

class OrderAdmin(admin.ModelAdmin):
    list_display = ['id','customer','order_time','order_status']
admin.site.register(models.Order, OrderAdmin)

class WishlistAdmin(admin.ModelAdmin):
    list_display = ['id','product','customer']
admin.site.register(models.Wishlist, WishlistAdmin)