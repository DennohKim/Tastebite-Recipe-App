class SessionsController < ApplicationController
    #Authorization will only skip signin action
    # skip_before_action :authorize, only: :create
  
    def create 
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password]) 
        session[:user_id] = user.id 
        render json: user, status: :created 
      else 
        render json: {errors: ["Invalid username or password"]}, status: :unauthorized 
      end 
    end
    
    #Deletes a user id from session
    def destroy
      session.delete :user_id 
      head :no_content 
    end
  
end