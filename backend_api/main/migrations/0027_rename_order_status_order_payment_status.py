# Generated by Django 5.0.7 on 2024-09-02 08:28

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0026_product_publish_status"),
    ]

    operations = [
        migrations.RenameField(
            model_name="order",
            old_name="order_status",
            new_name="payment_status",
        ),
    ]