class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    private 

    def hello
        render html: "Hello marvelers"
    end

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: {errors: ["Not Authorized"]}, status: :unauthorized unless @current_user
    end

    def render_unprocessable_entity_response(exception)
        render json: {errros: exception.record.errors.full_messages}, status: unprocessable_entity
    end
end
