# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:4000"

    resource "*",
      headers: :any,
<<<<<<< HEAD
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
=======
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true 
>>>>>>> bfaa40d2237ae63d0713f8f6fd2fb103f7d0d3f4
  end
end
