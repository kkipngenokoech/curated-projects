Rails.application.routes.draw do
  get 'tshirt/create'
  post 'tshirt/store'
  #get 'welcome/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  #resources :welcome
  # Defines the root path route ("/")
  # root "articles#index"
  root "welcome#index"
  get "signup", to: "registrations#new"
  post "signup", to: "registrations#create"
  get "signin", to: "sessions#new"
  post "signin", to: "sessions#create", as: "login"
  get "logout", to: "sessions#destroy"
  get "password", to: "passwords#edit", as: "editpassword"
  patch "password", to: "passwords#update"
  get "password/reset", to: "passwords_resets#new"
  post "password/reset", to: "passwords_resets#create"
  get "password/reset/edit", to: "passwords_resets#edit"
  patch "password/reset/edit", to: "passwords_resets#update"
end
