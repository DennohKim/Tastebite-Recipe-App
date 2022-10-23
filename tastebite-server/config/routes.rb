Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/users", to: "users#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
