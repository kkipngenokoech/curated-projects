# DEVISE

authentication using devise

ensure you add the gem "devise" in your folder/file. thats your gem file. and you bundle it.

## setting up devise in your app

one runs the following command

`rails g devise:install`.

## linking it to our users model

to link it to your models, you `rails g devise:name_of_model`.

ooowh, and we have to generate our views for devise, `rails g devise:views`

generate a migration and you can use your models in your data.

all that it remains is to code the sign out sign in buttons in our views.
