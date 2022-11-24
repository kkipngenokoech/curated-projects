class ReviewsController < ApplicationController
  def create
    @review = Review.new({:feedback => params[:feedback]})
    if @review.save
      flash[:notice] = 'Review was successfully created.'
      redirect_to @review
    end

  end
  def index
  end
  def new
    # @review = Review.new(Tshirt.find_by_id(params[:id])
  end

end
