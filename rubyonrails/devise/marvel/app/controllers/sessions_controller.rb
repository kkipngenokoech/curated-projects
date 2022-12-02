class SessionsController < ApplicationController
    def new; end

    def create
        user = User.find_by(email: params[:email])

        if user.present? && user.authenticate(params[:password]) 
            session[:user_id] = user.id
            if current_user.admin?
                redirect_to admin_path
            else
                redirect_to root_path, notice: "logged in successfully"
            end
        else
            flash.now[:alert] = "invalid username/email or password"
            render :new
        end
    end

    def destroy
            session[:user_id] = nil
            redirect_to root_path, notice: "logged out"
    end
end