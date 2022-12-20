class FormsController < ApplicationController
    def index 
    end
    def new
    end
    def create
        redirect_to root_path
    end
end
