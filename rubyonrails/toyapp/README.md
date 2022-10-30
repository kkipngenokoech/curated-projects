# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## toy-model

our data model, our users data model to be precise; has a name, id and email:

1. id - integer
2. name - string
3. email - string

another model we are going to use is microposts for our posts:

1. id - integer
2. content - text
3. user_id - integer

### users resource

this is a combination of the user model itself and the web interface

the users model can be created, updated, deleted via HTTP protocol.

we are going to scaffold this resource: `rails generate scaffold User name:string email:string

ensure you migrate your model `rails db:migrate` - this will update the database with our user model.

when you visit

1. `users/` - it will list all the users in the database.(action - index)
2. `users/1` - it will show the user with id 1.(action - show)
3. `users/new` - page to make a new user (action - new)
4. `users/1/edit` - edit the user with id 1. (action - edit)

variables that start with `@` becomes automatically available in the views.

### microposts resource

`rails generate scaffold Micropost content:text user_id:integer` - generate the resource.
