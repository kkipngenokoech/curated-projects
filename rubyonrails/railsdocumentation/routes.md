# routes.rb

this is the entry point to our application.

when rails receive a request via a url in our browsers, this is the first stop it makes, at a file known as routes.rb in your config subdirectory in your file.

from here, the routes match it to your controller where it further is directed into our actions.

let's say we type in our browser: `url/signup`, inside our routes.rb file, we are going to look for a `get` since we are requesting for data, `get signup` route.

once we have the route, it has a `to:` which means it is redirecting us to another page - controller and in the controller it has the methods set too, `to users#new`.

if your controller has more than one name, don't forget to use snake_case as you try to access them.

`get '/patients/:id', to: 'patients#show'`.

## resource routing

this enables you to declare the common routes for a given resourceful controller.

this includes the following routes:

1. show
2. destroy
3. edit
4. new
5. create
6. update
7. index

it gives you access to the basic restful routings.

so the function resource is written as follows: `resource :controller`.

## HTTP VERBS

we have the following http verbs that normally accompany our requests:

1. GET
2. POST
3. PATCH
4. PUT
5. DELETE

get, `/photos` this leads you to photos#index - and it displays all the photos.

`get /photos/new` - this redirects you to photos#new returns an html form for creating a new photo.
`POST /photos` - it gets redirected to photos/create - creates anew photo.

routers use the http verbs and the urls to match inbound requests to several routes.

## PATH AND URL HELPERS

if you create a new resourceful route: `resources :photos`:

1. photos_path - returns /photos
2. new_photo_path - returns /photos/new
3. edit_photo_path(:id) - returns the ided photo
4. photo_path(:id) - this redirects you to the photo of the given id /photos/12

each of the above helpers has corresponding url helpers with pre-fixed paths with the current host port and path prefix.

## defining multiple resources at the same time

resources :books, :photos, :ideas

but this can work:

1. resources :books
2. resources :videos
3. resources :ideas

## singular resources

you can as well declare singular resources:

get 'profile', to: 'user#show'

you can redeclare that in this way:

get 'profile', action: :show, controller: 'users'
