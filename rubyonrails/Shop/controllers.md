# CONTROLLERS

N/B : our controller names should be in plural so as to help rails in linking your models, views and controllers automatically.

here we are going to  configure our controllers to show the right information on each route.

let's first create our sessions controller. `rails g controller sessions`

## [APPLICATION_CONTROLLER.RB](./app/controllers/application_controller.rb)

here we are going to define /setup an authorization system to check whether or not the current user is authorized to access certain controller models and routes.

## [SESSION CONTROLLER.RB](./app/controllers/sessions_controller.rb)

here our two methods are going to live here, our create and destroy session.

they are going to help us track our users.

our create action in our sessions controller, will search our database for the user entry that matches the provided username in the login form, authenticate using bcrypt and the provided the password and then sets the session and redirects our user.

## [USERS CONTROLLERS](./app/controllers/users_controller.rb)

here we are going to handle our users signup and me routes.
