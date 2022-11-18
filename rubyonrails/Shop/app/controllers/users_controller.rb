class UsersController < ApplicationController
    #skip_before_action :authorize, only: :create
    def new
        @user = User.new
        @title = 'sign up'
        redirect
    end

    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = user.id
            redirect_to_root_path
        else
            render :new
        end
    end
    
    def show
        # render json: @current_user
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.permit(:name, :email, :password)#, :password_confirmation, :image_url, :bio)
    end
end
