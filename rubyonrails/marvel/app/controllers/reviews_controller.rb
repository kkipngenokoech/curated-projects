class ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      flash[:notice] = 'Review was successfully created.'
      redirect_to @review
    else
      render 'new'
    end
  end
  def index
  end
  def new
    # @review = Review.new(Tshirt.find_by_id(params[:id])
  end

end
