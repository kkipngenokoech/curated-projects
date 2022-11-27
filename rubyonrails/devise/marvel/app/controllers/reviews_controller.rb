class ReviewsController < ApplicationController
  def create
    @tshirt = Tshirt.find(params[:tshirt_id])
    #@review = @tshirt.reviews.create(review_params)
    @review = @tshirt.reviews.new(review_params)
    @review.save
    #redirect_to root_path
    respond_to do |format|
      if @review.save
        format.html { redirect_to root_path, notice: 'Review was successfully created'}
      else
        format.html { render action: 'new' }
      end
    end
  end
  def index
  end
  def new
    # @review = Review.new(Tshirt.find_by_id(params[:id])
  end

  private
  def review_params
    params.require(:review).permit(:feedback, :image)
  end
end