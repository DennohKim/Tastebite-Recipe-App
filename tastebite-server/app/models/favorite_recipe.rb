class FavoriteRecipe < ApplicationRecord
    belongs_to :user

    validates :title, presence: true
    validates :country, presence: true
    validates :rating, presence: true
    validates :ingredients, presence: true
    validates :procedure, presence: true
    validates :people_served, presence: true
    validates :category, presence: true
    validates :category, inclusion: { in: ['Breakfast', 'Lunch', 'Supper', 'Drinks'] }
    validates :cooking_time, presence: true
    validates :image_url, presence: true
    validates :video_link, presence: true
end
