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
