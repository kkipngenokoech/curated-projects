class CommentsController < ApplicationController
    def index
        @comments = Comment.all
        respond_to do |format|
            format.html
            format.xml {render :xml => @comments}
            format.json {render :json => @users}
        end
    end
    def new
        @comment = Comment.new
        #redirect_to root_path, #flash[:notice]: "comment created successfully"
    end

end
