# Generated by Django 4.0.3 on 2022-03-28 20:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blockchain', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='confirmedtransaction',
            old_name='item_id',
            new_name='item',
        ),
        migrations.RenameField(
            model_name='transaction',
            old_name='item_id',
            new_name='item',
        ),
    ]