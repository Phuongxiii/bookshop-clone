# Generated by Django 4.1.3 on 2022-11-13 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0010_productthum_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.CharField(blank=True, default='00.00', max_length=20, null=True),
        ),
    ]
