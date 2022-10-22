# record_store

our record_store, all the dirs and files I created them manually except [Gemfile.lock](Gemfile.lock)

## [app.rb](app.rb)

this is where sinatra handles our routing.
this file is found in the root directory.
we can run this application by `ruby app.rb`

`also_reload` - it tells our application which files to reload.it asks our application to specifically look into our `lib`.
`/**/` - this tells it to look into all subdirectories found inside the lib.

## [Gemfile](Gemfile)

this Gemfile normally holds al our Gems including the `sinantra gem`.
when we bundle this Gemfile(our gems), it will generate a [Gemfile.lock](Gemfile.lock), this file should not be edited and should never be created manually.

## [lib](lib/)

this is where we store our backend logic. it for now contains Album.rb, a general rule of thumb is to have a separate file for each custom class. It's also a best practice to name the file the same name as the class.

### [album.rb](lib/album.rb)

`@@albums` - this is a class variable, we are using it here to mock a database.
our albums only have name attributes but other attributes can be added if need be.

## [views](views/)

this folder contains our Application's HTML.
All files in this folders should have a `.erb` extension.
erb stands for embedded ruby. this allows us to embed ruby under HTML.
the [layout.erb](views/layout.erb), contains html logic that will be used across all our views.

We'll also have files for all the views our application will need, including viewing a list of albums, viewing a single album, and editing and updating an album.

## [spec](spec/)

we should always test our code!
including the code we will put into our `app.rb`
[album_spec.rb](./spec/album_spec.rb) - it includes unit tests of all the code include inside our [album](lib/album.rb) class.

[album_integration_spec.rb](spec/album_integration_spec.rb) - this includes our integrations tests.

### [album_spec.rb](spec/album_spec.rb)

here we are going to add a method to return all of the results in our database.
it will be returned in form of an array.
Our new test is actually covering two things. First, it tests whether we can save albums to our mock database. Second, it verifies that Album.all() works for multiple items.

## [public](./public/)

here we will store all public assets such as images(add img subdirectory), CSS, JS in this directory.
