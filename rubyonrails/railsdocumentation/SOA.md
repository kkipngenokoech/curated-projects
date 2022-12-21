# SERVICE ORIENTED ARCHITECTURE

the basic idea here is that your application is going to have many services within itself.

this includes things like user registration viewing tshirts and many other services.

instead of building all of these under the same master application, you break them out into fully independent pieces then have them talk to each other internally via apis.

this is good since it only asks for data and doesn't care how the other parts of an application works.

when linking our application with javascript applications, you will be calling only this apis to provide data instead of full html pages.

you will be asking for XML or JSON data
