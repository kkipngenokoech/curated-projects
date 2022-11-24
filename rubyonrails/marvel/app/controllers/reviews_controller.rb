class ReviewsController < ApplicationController
  def create
    # @tshirt = Tshirt.find(params[:tshirt_id])
    # @review = @tshirt.reviews.create(params[:review].permit(:feedback)
    # @review.save
    #   flash[:notice] = 'Review was successfully created.'
    #   redirect_to @review
    # else
    #   render 'new'
    end
  end
  def index
  end
  def new
    # @review = Review.new(Tshirt.find_by_id(params[:id])
  end

  private
  def review_params
    params.require(:review).permit(:feedback, :body, :rating)
    
end
