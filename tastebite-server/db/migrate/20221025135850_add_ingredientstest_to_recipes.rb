class AddIngredientstestToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :ingredientstest, :text, array:true, default: []
  end
end
