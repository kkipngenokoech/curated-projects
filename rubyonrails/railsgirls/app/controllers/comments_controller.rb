class CommentsController < ApplicationController
    def index
        @comments = Comment.all
    end
    def new
        @comment = Comment.new
        #redirect_to root_path, #flash[:notice]: "comment created successfully"
    end

end
