class CreateFavoriteRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :favorite_recipes do |t|
      t.string :title
      t.string :country
      t.integer :rating
      t.text :ingredients
      t.text :procedure
      t.integer :people_served
      t.string :category
      t.integer :cooking_time
      t.string :image_url
      t.string :video_link
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
