class User < ApplicationRecord
    has_secure_password
    has_many :recipes

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    validates :password, presence: true, length: { in: 6..20 }
    validates :image_url, presence: true
end
