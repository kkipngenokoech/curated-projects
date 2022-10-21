require ('sinatra')
get ('/') do
    "This will be our Home Page. '/' is always the root route in a sinatra application."
end

get ('/albums') do
    "This route will always show a list of all albums."
end

get ('/albums/new') do 
    "This route will always show a form to create a new album."
end

get ('/albums/:id') do 
    "This route will always show details for  a specific album #{params[:id]}."
end

get ('/albums/:id/edit') do 
    "This route will always show a form to edit a specific album."
end

post ('/albums') do
    "This route will add an album to our list of albums. We can't access this by typing in the URL. In a future lesson, we will use a form that specifies a POST action to reach this route."
end

patch ('/albums/:id') do
    "this route will update an album. Again we can't reach this route via typing it in our url."
end

delete ('/albums/:id') do
    "This route will delete an album. Again we can't reach this route via typing it in the url"
end

get ('/custom_route') do
    "this is a route that can help us create more routes if necessary"
end