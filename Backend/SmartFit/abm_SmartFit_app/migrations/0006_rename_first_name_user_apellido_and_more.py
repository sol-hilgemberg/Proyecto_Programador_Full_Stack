# Generated by Django 4.2.1 on 2023-06-05 00:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('abm_SmartFit_app', '0005_remove_user_groups_remove_user_is_active_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='first_name',
            new_name='apellido',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='password',
            new_name='contraseña',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='date_of_birth',
            new_name='fechaNacimiento',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='last_name',
            new_name='nombre',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='username',
            new_name='usuario',
        ),
    ]