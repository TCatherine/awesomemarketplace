# Generated by Django 4.0.3 on 2022-04-19 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0005_remove_imageobject_object_imageobject_private_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='last_transaction_id',
            field=models.IntegerField(default=-1),
        ),
    ]
