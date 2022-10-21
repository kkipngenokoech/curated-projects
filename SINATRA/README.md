# SINATRA

sinantra is a server-side web framework(Software that manages the necessary code for handling HTTP requests and responses).

sinatra is a minimalist Ruby Framework for building server-side applications.

## server-side applications

the client's request to view a page depends on the server delivering the correct content for that specific page to the client — whether that's HTML, CSS, or other resources. The client then renders this content for the user.

### client

 is usually a web browser like Chrome but can be anything that facilitates interaction with the web.

### server

is a machine that contains resources like web pages, files, and databases.

## SINATRA ROUTING

this framework is awesome when you are learning routing, this is because you will manually create these routes.

### steps

1. create a [folder](./sinantra_routing/) `mkdir sinantra_routing`.
2. add this two files in the root directory [Gemfile](sinantra_routing/Gemfile) and [app.rb](sinantra_routing/app.rb)
3. add the codes in them respectively.
4. ensure you `bundle` your [Gemfile](./sinantra_routing/Gemfile)

#### [explaining the app.rb](sinantra_routing/app.rb)

`require ('SINATRA')` - this helps us use sinantra functionality, this includes `get`, `post`, `patch` and `delete` 

the `do end` loops - this is what will be executed when this paths are reached, normally we have heavy hard coded ruby code here.

FYI - sinatra uses `puma` as it web server.

our sinatra applications always should have a root folder.

when accessing primary id  you use the `param[:id]` since dynamic values in a URLs, link and forms will be passed to the `params` hash.

Any time we type into a URL, it is a `GET` request.
we can't `DELETE`, `POST`, `PATCH` by typing url.

We've successfully created routes for our application's CRUD functionality.