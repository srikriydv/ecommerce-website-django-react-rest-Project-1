from django.contrib import admin
from django.utils.html import format_html
from . import models

# Register your models here.
class VenderAdmin(admin.ModelAdmin):
    list_display = ['id','get_username', 'mobile','address']
    def get_username(self,obj):
        return obj.user.username
admin.site.register(models.Vendor, VenderAdmin)

class ProductImageInline(admin.TabularInline):
    model = models.ProductImage
    extra = 1
    readonly_fields = ('image_tag',)

    def image_tag(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 100px;"/>', obj.image.url)
        return "-"
    image_tag.short_description = 'Image'


class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'publish_status', 'image_tag')
    inlines = [ProductImageInline]
    readonly_fields = ('image_tag',)

    def image_tag(self, obj):
        # Check if the product has a main image and render the HTML
        if obj.image:
            return format_html('<img src="{}" style="max-height: 100px;"/>', obj.image.url)
        return "-"
    image_tag.short_description = 'Main Image'
admin.site.register(models.Product,ProductAdmin)
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
    list_display = ['id','customer','order_time','payment_status']
admin.site.register(models.Order, OrderAdmin)

class WishlistAdmin(admin.ModelAdmin):
    list_display = ['id','product','customer']
admin.site.register(models.Wishlist, WishlistAdmin)