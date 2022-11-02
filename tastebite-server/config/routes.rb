Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me/:id", to: "users#show"
  get "/users", to: "users#index"
  patch "/users/:id", to: "users#update"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :recipes, only: [:index, :show, :create, :update, :destroy]
  resources :favorite_recipes, only: [:index, :create, :update, :destroy]
end
