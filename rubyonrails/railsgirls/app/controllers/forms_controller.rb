class FormsController < ApplicationController
    def index 
    end
    def new
    end
    def create
        redirect_to root_path, notice: "form submitted successfully"
    end
    def search
        
        redirect_to root_path
    end
    def show
    end
end
