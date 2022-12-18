class SecretMenuItemsController < ApplicationController
    def index
        @secret_menu_items = SecretMenuItem.all
        render json: @secret_menu_items
    end
    
    def show
        @secret_menu_item = SecretMenuItem.find(params[:id])
        render json: @secret_menu_item
    end
    def create
        @secret_menu_item = SecretMenuItem.create(
            menu_name: params[:menu_name],
            restaurant_name: params[:restaurant_name],
            menu_description: params[:menu_description]
        )
        render json: @secret_menu_item
    end
    def update
        @secret_menu_item = SecretMenuItem.find(params[:id])
        @secret_menu_item.update(
            menu_name: params[:menu_name],
            restaurant_name: params[:restaurant_name],
            menu_description: params[:menu_description]
        )
        render json: @secret_menu_item
    end
    def destroy
        @secret_menu_items = SecretMenuItem.all
        @secret_menu_item = SecretMenuItem.find(params[:id])
        @secret_menu_item.destroy
        render json: @secret_menu_item
    end
end

