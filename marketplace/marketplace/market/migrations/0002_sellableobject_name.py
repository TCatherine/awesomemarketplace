# Generated by Django 4.0.3 on 2022-03-27 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sellableobject',
            name='name',
            field=models.CharField(default='no name', max_length=30),
        ),
    ]
