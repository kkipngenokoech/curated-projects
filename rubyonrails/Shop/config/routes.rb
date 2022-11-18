Rails.application.routes.draw do
  resources :users
  # resources :sessions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #root "application#hello"
  #root "sessions#home"
  get "/signup", to: "users#new"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/login", to: "sessions#login"
  post "/login", to: "sessions#login"
  post "/logout", to: "sessions#logout"
  get "/logout", to: "sessions#destroy"

  # get "*path", to: "fallback#index", constraints: ->(req) {!req.xhr? && req.format.html?}
end
