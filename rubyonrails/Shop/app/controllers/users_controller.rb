class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        # render json: @current_user
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :image_url, :bio)
    end
end
