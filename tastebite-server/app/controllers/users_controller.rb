class UsersController < ApplicationController
    #Authorization will only skip signup action & index users
    # skip_before_action :authorize, only: [:create, :index]

    def index
        users = User.all
        render json: users
    end

    def create 
      user = User.create!(user_params) 
      render json: user, status: :created 
    end

    #Return a user who has their id stored in session
    def show 
      render json: @current_user
    end
    
    #Return an updated user 
    def update
        render json: @current_user.update!(user_params)
    end
  
    private 
  
    def user_params 
      params.permit(:username, :email, :password, :password_confirmation, :image_url) 
    end
  
end