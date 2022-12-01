class ApplicationController < ActionController::Base
    def require_user_logged_in!

        redirect_to sign_in_path, alert: "You must be logged in" if Current.user.nil?
    end

    protected

    def authenticate_admin!
        authenticate_user!
        redirect_to root_path root_path, status: :forbidden, alert: "only admins can create Tshirts" unless current_user.admin?
    end
end
