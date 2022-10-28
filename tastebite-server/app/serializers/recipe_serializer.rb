class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :country, :rating, :ingredients, :procedure, :people_served, :category, :cooking_time, :image_url, :video_link

  has_one :user
end
