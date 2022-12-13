# rails API

this involves coding your own apis, that is telling your controllers to spit out xml or json instead of HTML.

your rails application is already basically an api

## basics to building restful apis

if you want rails app to return JSON instead of HTMl you need to tell your controller to do so.

you can also configure your action controller to return either an HTML or JSON depending on wether the incoming request is a normal request or from API command call.

this is determined based on the extension of the file asked for.

when you click a link in your browser or your api command line, at your server log you can see the path you are trying to access and the feedback given and how it is rendered back.

```ruby
 Started GET "/posts/new" for 127.0.0.1 at 2013-12-02 15:21:08 -0800
Processing by PostsController#new as HTML
```

The first line tells you which URL was requested and the second tells you where it’s going and how Rails is processing it

## rendering JSON or XML

to change your response to JSON or XMl, you need to tell your controller using the #respond_to method of your controller.

```ruby
...
def index
    @users = User.all
    respond_to do |format|
        format.html
        format.json { render :json => @users}
        format.xml { render :xml => @users}
    end
end
...
```

In this case, #respond_to passes the block a format object, to which you can attach the appropriate rendering call. If you do nothing, HTML will render using the default Rails template as normal

The #render function is smart enough to know how to render a wide range of formats. When you pass it the key :json, it will call #to_json on the value, in this case @users.

just like that that is your api.
