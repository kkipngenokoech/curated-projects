class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        @user = User.find_by(name: params[:name])
        if !!@user & @user.authenticate(params[:password])
            session[:user_id] = user.id
            redirect_to_user_path
        else
            message = "make sure your username and password is correct", status: :unauthorized
            redirect_to_login_path, notice: message
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
