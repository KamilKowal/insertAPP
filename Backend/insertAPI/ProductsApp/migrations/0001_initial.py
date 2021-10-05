# Generated by Django 3.2.7 on 2021-10-05 12:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('CategoryId', models.AutoField(primary_key=True, serialize=False)),
                ('CategoryName', models.CharField(default='Something', max_length=30)),
                ('Ordering', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Offer',
            fields=[
                ('OfferId', models.AutoField(primary_key=True, serialize=False)),
                ('OfferName', models.CharField(default='Something', max_length=30)),
                ('description', models.CharField(default='Something', max_length=250)),
                ('price', models.IntegerField(default=0)),
                ('created_at', models.DateField(null=True)),
                ('Category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ProductsApp.category')),
            ],
        ),
    ]