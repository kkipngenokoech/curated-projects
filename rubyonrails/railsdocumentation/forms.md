# rails forms

the most important attribute in the forms is the name attribute since it is going to tell the rails application which parameters are going to be associated with which columns in the model.

to access this parameters in your controller you use `params[:thenameofyourattribute]`

that is why you find that radio names are similar.

## VANILLA HTML FORMS

```ruby
 <form accept-charset="UTF-8" action="/forms" method="post">
    <label for="query">Search for:</label>
    <input id="query" name="query" type="text" />
    <input name="commit" type="submit" value="search" data-disable-with="Search" />
  </form>
```

in your plain html form creation, you have to pay attention to two important attributes, that is the action and method.

### action

this is the route that will be used to redirect your input to the controllers.

if you are redirecting to a resourceful action, your action will be `/controllername` and the methods:

1. if it is a `get` method, this will redirect to the controller index action
2. if it is a `post` method, this will redirect to the controller create action.

if you want to redirect to un-resourceful route, you first have to declare the route in your routes.rb then in the action you `/controller/action` and then you use get or post depending on your routes declaration.

## form helpers

rails do some heavy lifting for us and so it has some helpers to help us with the repetitive parts of our application forms.

### form_with

to make a form with `form_with` you pass the following parameters the url and method, it takes care of the CSRF security token by automatically creating and hiding it.

the default path/action is the current page

form_with is majorly similar to vanilla html forms where you replace the action with url: and method remains method just that way

```ruby
<%= form_with(url:..., method:..) do %>
    <%= label_tag(:name, "search for") %>   
    <%= text_field_tag(:name)%>
    <%= submit_tag("search") %>    
<% end %>
```

so in form_with you use label_tag, text_field_tag, submit_tag to replace the inputs.

### form_with using models

more often than not, we want our forms to act on the attributes of an existing model.

you can use the form_with using a model name.

this will create a nested attributes into one instance

in your controller action:

```ruby
@instance = Instance.new
```

then in your views:

```ruby
<%= form_with model:@instance do |form| %>
    <%= form.text_field :title %>
    <%= form.submit "create" %>
<% end %>
```

this does a heavy uplifting.

The best part about form_with is that if you just pass it a model object like @article in the example above, Rails will check for you if the object has been saved yet. If it’s a new object, it will send the form to your #create action. If the object has been saved before, so we know that we’re editing an existing object, it will send the object to your #update action instead. This is done by automatically generating the correct URL when the form is created. Magic!
