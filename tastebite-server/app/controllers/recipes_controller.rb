class RecipesController < ApplicationController
  #Authorization will only be skipped when displaying all recipes
  # skip_before_action :authorize, only: :index

  def index
    render json: Recipe.all, status: :ok
  end

  def show
    recipe = find_recipe
    render json:  recipe, status: :ok
  end

  def create
    recipe = Recipe.create!(recipe_params)
    render json: recipe, status: :created
  end

  def update
    recipe = find_recipe.update!(recipe_params)
    render json: recipe
  end

  def destroy
    recipe = find_recipe
    recipe.destroy
    head :no_content
  end

  private

  def find_recipe
    Recipe.find(params[:id])
  end

  def recipe_params
    params.permit(:title, :country, :rating, :ingredients, :procedure, :people_served, :category, :cooking_time, :image_url, :video_link, :user_id )
  end
end
