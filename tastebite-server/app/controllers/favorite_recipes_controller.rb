class FavoriteRecipesController < ApplicationController
    def index 
        render json: FavoriteRecipe.all, status: :ok
    end
    
    def create
        favorite_recipe = @current_user.favorite_recipes.create!(favorite_recipe_params) 
        render json: favorite_recipe, status: :created
    end
    
    private 
    def favorite_recipe_params 
        params.permit(:title, :country, :rating, :ingredients, :procedure, :people_served, :category, :cooking_time, :image_url, :video_link)
    end
    
end
