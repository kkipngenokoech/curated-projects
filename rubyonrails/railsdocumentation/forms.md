# rails forms

the most important attribute in the forms is the name attribute since it is going to tell the rails application which parameters are going to be associated with which columns in the model.

to access this parameters in your controller you use `params[:thenameofyourattribute]`

that is why you find that radio names are similar.

## form helpers

rails do some heavy lifting for us and so it has some helpers to help us with the repetitive parts of our application forms.

### form_with

to make a form with `form_with` you pass the following parameters the url and method, it takes care of the CSRF security token by automatically creating and hiding it.

the default path/action is the current page
