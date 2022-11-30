# MODELS

## presence :true

if we want to enforce a policy that a certain field has to be entered before a user is allowed to save whatever he wants to save, we include the presence :true attribute, i.e

```ruby
validates :title, :body, :password, presence :true
```

hence a user cannot save or create a new whatever he/she's creating without entering data to the above title body and password fields.
