class AddProcedurestestToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :procedurestest, :text, array:true, default: []
  end
end
