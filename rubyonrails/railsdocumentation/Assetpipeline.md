# asset pipeline

asset - this are the additional files that get called by the browser after your initial gob for html is received.

assets include:

1. pictures
2. css stylesheets
3. javascript files
4. images
5. videos

rails flatten everything out and mash all your asset files together into one big one for each filetype (called “concatenation”). The process used to do this is the Asset Pipeline. For your CSS files, this means that Rails will take all the individual .css files and just stack them on top of each other in one giant asset file. It will then run an “uglifier” or “minifier” program on the file to remove extraneous spaces and make everything nice and small for shipping to the browser.
