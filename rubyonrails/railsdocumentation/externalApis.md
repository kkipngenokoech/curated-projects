# ruby on rails and external apis

most popular service providers have apis: twitter, google, Facebook, Dropbox, AirBnB.

## steps to using external apis

### register

step number one is normally to register to the api providers.

they will then provide you with an API key.

You’ll typically also get a “secret key” or similarly named code. Whereas the API key is usually public, the secret key is an added layer of security that’s required for the more secure APIs and you will use it to generate a cryptographic token that authenticates any requests you make. You will need to make sure you don’t include this secret key in your Git repo! Use the figaro gem or environment variables to put the key on the server instead of hard coding it.

## restful apis

these days, most apis are restful, that is to say the usual http methods: GET, POST, PUT, PATCH, DELETE will retrieve resources as expected

## OAUTH AND LOGIN VIA API

there are some sites that normally ask you to login via facebook, google or even microsoft. here you don't normally even have to give them a new password, that's is use of an api(OAUTH)

it usually solves of user privacy and access control.

## OAUTH 2.0

to implement Oauth 2.0 in rails, you use a gem called `Omniauth.`

this will help you with the authentication

## SDKS

this means software development kits

this is what some companies provide instead of APIs.

this are normally javascript libraries that contain all the code necessary to access their API.

this becomes even more simple since you will be accessing there data using basic js methods.
