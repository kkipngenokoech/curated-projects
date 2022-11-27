class TshirtController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    @tshirts = Tshirt.where(nil)
    @tshirts = Tshirt.filter_by_color(params[:color]) if params[:color].present?
    @tshirts = Tshirt.filter_by_size(params[:size]) if params[:size].present?
    @tshirts = Tshirt.filter_by_character(params[:character]) if params[:character].present?
  end
  def new
  end
  def create   
  end

  def show
    if Tshirt.where(params[:id]) === nil
      flash[:notice] = "TShirt not found"
      redirect_to index_tshirt_path
    else
      @tshirt = Tshirt.find(params[:id])
    end
  end

  def store
    @image = Cloudinary::Uploader.upload(params[:media])
    @tshirt = Tshirt.new({:color => params[:color], :size => params[:size],:character => params[:character], :img_url => @image['secure_url']})
    @tshirt.save
    redirect_to ('/')
  end

  def destroy
    @tshirt = Tshirt.find(params[:id])
    if @tshirt.present?
      @tshirt.destroy
      redirect_to action: :index
    end
    # respond_to do |format|
  end

  def filter
  end

  def coord
    @tshirt = Tshirt.all
  end
end
