# Generated by Django 4.0.3 on 2022-05-03 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0006_customuser_last_transaction_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='is_2fa_enabled',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='sellableobject',
            name='last_updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
