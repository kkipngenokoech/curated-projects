Rails.application.routes.draw do
  devise_for :users
  resources  :welcome
  resources :requests
  resources :tshirt do
    resources :reviews
  end
  #delete "sign_out" 
  #get 'requests/create'
  #get 'reviews/create'
  #get 'review/create'
  #get 'tshirt/create'
  #post 'tshirt/store'
  #delete 'deletetshirt/:id', to: "tshirt#destroy"
  get "filter", to: "tshirt#filter"
  get "co-ord", to: "tshirt#coord"
  #get 'welcome/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  #resources :welcome
  # Defines the root path route ("/")
  # root "articles#index"
  root "tshirt#index"
  get "signup", to: "registrations#new"
  post "signup", to: "registrations#create"
  get "login", to: "sessions#new"
  post "signin", to: "sessions#create"
  get "logout", to: "sessions#destroy"
  get "password", to: "passwords#edit", as: "editpassword"
  patch "password", to: "passwords#update"
  get "password/reset", to: "passwords_resets#new"
  post "password/reset", to: "passwords_resets#create"
  get "password/reset/edit", to: "passwords_resets#edit"
  patch "password/reset/edit", to: "passwords_resets#update"
  get "Review-box", to: "reviews#create"
  get "request_box", to: "requests#new" 
end
