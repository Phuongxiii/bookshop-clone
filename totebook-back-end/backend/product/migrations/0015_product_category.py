# Generated by Django 4.1.3 on 2022-11-15 05:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0014_alter_productthum_category_alter_productthum_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(blank=True, default='', max_length=100, null=True),
        ),
    ]
