# NODEJS

Take your [javascript](../javascript/) skills to the server-side.
Node is a javascript runtime. Node simply allows you to run JavaScript code on a machine such as your local computer or a server without having to go through a web browser.

Node can read or write local files, create HTTP connections and listen to network requests.

Node is event-driven.

Node  underlying javascript engine is V8, same engine used in Google Chrome.

the major difference between google chrome and node is that a browser like chrome provides the runtime environment in the browser whereas node provides it in the command line.

They also have slightly different capabilities, with the browser providing tools like the DOM, and Node providing tools like file system access.

we will mostly use node as package manager compared to as a runtime environment.

this will help us install javascript libraries to our projects.

## RUN NODE

`npm <name of your js file>`.

you can also embed this information in our javascript file using a shebang line `#!/usr/bin/node`.

the above line gives the absolute path of our intepreter. all we need to do now is just to make our script executable - `chmod u+x name of our js file`.

if we want to execute a string directly from our terminal, just like the way we do in our browser's console tab, you `node -e console.log("hey")` you use the flag -e or -eval.

to restart your node automatically when you make changes to your js file you use nodemon module:

install the module - npm i -g nodemon

so whenever you run an application yu use nodemon instead of node.
