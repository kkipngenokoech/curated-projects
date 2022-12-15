Rails.application.routes.draw do
  resources :travels
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "travels#index"
  get "/search" => 'travels#search'
end
