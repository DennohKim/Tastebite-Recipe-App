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
      user = find_user
      render json:  user, status: :ok
    end
    
    #Return an updated user 
    def update
      user = find_user
      render json: user.update!(update_user_params), status: :ok

      # render json: User.update!(update_user_params )
    end
  
    private 
  
    def user_params 
      params.permit(:username, :email, :password, :password_confirmation, :image_url) 
    end

    def update_user_params 
      params.permit(:username, :email, :image_url) 
    end

    def find_user
      User.find(params[:id])
    end
  
end