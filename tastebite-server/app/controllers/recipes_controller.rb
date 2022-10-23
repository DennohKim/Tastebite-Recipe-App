class RecipesController < ApplicationController
    #Authorization will only be skipped when displaying all recipes
    skip_before_action :authorize, only: :index

    def index 
      render json: Recipe.all, status: :ok
    end
  
    def create
      recipe = @current_user.recipes.create!(recipe_params) 
      render json: recipe, status: :created
    end
  
    private 
    def recipe_params 
      params.permit(:title, :country, :rating, :ingredients, :procedure, :people_served, :category, :cooking_time, :image_url, :video_link)
    end
  
  end