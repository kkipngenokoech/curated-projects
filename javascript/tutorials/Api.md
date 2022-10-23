# API

in simple terms, Application  Programming Interface allows two applications to communicate.

APIs can be used with any programming language.

## API SECTION

an API response has several parts:

1. Header - it contains information i.e date, content type....
2. Body - it contains any message from the API, [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), plus data we've requested.

## API calls are asynchronous

they are javascript codes that executes later.

## API calls

there are normally many different kinds of API calls
this include: `GET` and `POST` requests.

A `GET` requests gets information.

we will be using token-based authentication - as in we need to attach our API key for every call we make to the server.

API server will check our token (the API key) and verify whether we can have access to the information we are asking for (Authentication).

some APIs use tokens that expire every 24hrs. that means we need to get a new token every day.

## OpenWeather API

1.sign up for an [account]
2. Locate the API key called Default. You'll use this key in every request you make to the OpenWeather API in the API tab.

## API Documentations on Endpoints

A well-documented API will have information about all of its endpoints.
`an endpoint` - this is a specific URL we can query for information.

## [POSTMAN](https://www.postman.com/downloads/)

This is a tool used to test APIs.
donload the linux version of it (I mean I am using Ubuntu).
to extract it you  cd to the direction you donwloaded the file.`$tar -zxvf nameofyourprogram.gz` ti exract it

for me I have installed using:
`sudo snap install snapd` - to install snapd.
`sudo snap install postman` - to install the postman itself.

### using postman

To make an API request:

you need to create a new request, ou can open a new tab or select Create a request from the overview tab.

type in your query into the URL bar.
the default type of an API is a `GET` request. you can change it.

whenever you want to use APIs always test it using postman first.

when you run your API on the browser it returns your data in json form.

## [API CALLS USING JAVASCRIPT](../weather_api/)

### [index.js](../weather_api/index.js)

we use the constructor of  `XMLHttpRequest` object and save it in a variable known has request.
the above object is used to interact with servers.

`loadend` event - this is fired up when a request has completed whether successfully(after load) or unsuccessfully(After abort or error).

`const response =  JSON.parse(this.responseText)` - responseText is a property of `XMLHttpRequest`, it contains information sent from the API - weather data or an error message.
this responseText is always normally populated once a response is received from an API server.
`JSON.parse()` - this helps us format the data into a JSON format.
`status` is also a property of XMLHttpRequest and it helps us get the HTTP status code of our api request.

`XMLHttpRequest.open()` - it takes three parameters:

1. the method of the request
2. the request url
3. A boolean for whether the request should be asynchronous or not.(we want it async so that the browser cannot freeze.)

## PROTECTING OUR API KEYS

we are going to store our API in a `.env` file stored in our local machines, we can store any environment variables here that we want to keep them secret.
then this .env file we are going to add it to a `.gitignore`.

## CONFIGURING WEBPACK

`npm install dotenv-webpack@2.0.0 --save-dev` (.dotenv-webpack) - this allows us o make our environment variables to be available inside our application.

this is a plugin and so to use it we need to first require it and then add it to the plugins array in [webpack.config.js](./../weather_api/webpack.config.js)

## ACCESSING ENVIRONMENT VARIABLES

To access environmental variables in our application, we need to preface the environmental variable with process.env
