# APIS

to create an api project one should:

1. rails new MenuApi --api

you pass the api flag to show that you are generating an api only application this will enable you to create a customized rails project for api only by not generating the entire api project skeleton.

## CORS

This is Cross Origin Resource Sharing - this allows one to access your apis.

navigate to `config>intializers>cors.rb` and uncomment line 8-16.

and again uncomment line gem `racks-cors` to enable this feature.
