# SCAFFOLD

A scaffold is a set of automatically generated files which forms the basic structure of rails.

these files include:

1. a controller
2. a model
3. views for every standard controller action
4. resourceful route

to generate a scaffold you: `rails g scaffold books`.

to undo a scaffold you: `rails d scaffold books`

every other time you create a scaffold you have to migrate your data. `rails db:migrate`

this method will only generate your models with timestamps only, but you can add extra fields after the books that's to say:

`rails g scaffold books title:string author:string`

so any other time you want to create an instance of the model it would ask you for the title and the string.

one advantage of using a scaffolding command is that all our views, models and migrations are created in the correct naming conventions.

this helps you avoid creating this controllers and models and views manually.
