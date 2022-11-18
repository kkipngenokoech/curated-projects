# AUTHENTICATION

we are going to start by creating a model for the users

`rails g resource user <model colums here>`

the model columns include:

1. name - string
2. email - string
3. phone no - int
4. address - string

to specify their data types you name:string, email:string.

`rails g resource User  name:string email:string phone_no:number address:string password_digest`

every other time you make changes to your model you have to do a migration.
`rails db:migrate`.

