# Generated by Django 5.0.7 on 2024-08-29 15:41

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0024_alter_customeraddress_options_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="vendor",
            name="mobile",
            field=models.PositiveBigIntegerField(null=True, unique=True),
        ),
        migrations.AddField(
            model_name="vendor",
            name="profile_img",
            field=models.ImageField(null=True, upload_to="profile_img/"),
        ),
    ]