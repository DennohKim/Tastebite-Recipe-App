class FavoriteRecipesController < ApplicationController
    def index 
        render json: FavoriteRecipe.all, status: :ok
    end
    
    def create
        favorite_recipe = FavoriteRecipe.create!(favorite_recipe_params) 
        render json: favorite_recipe, status: :created
    end

    def update
        favorite_recipe = find_favorite_recipe.update!(favorite_recipe_params) 
        render json: favorite_recipe
      end
  
      def destroy
        favorite_recipe = find_favorite_recipe
        favorite_recipe.destroy
        head :no_content
      end
    
    private 

    def find_favorite_recipe
        FavoriteRcipe.find(params[:id])
    end
    
    def favorite_recipe_params 
        params.permit(:title, :country, :rating, :ingredients, :procedure, :people_served, :category, :cooking_time, :image_url, :video_link, :user_id)
    end
    
end
