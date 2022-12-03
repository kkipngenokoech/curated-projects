class TshirtController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :filter]
  before_action :authenticate_admin!, only: [:new,:edit,:delete]
  def index
    @tshirts = Tshirt.where(nil)
    @tshirts = Tshirt.filter_by_color(params[:color]) if params[:color].present?
    @tshirts = Tshirt.filter_by_size(params[:size]) if params[:size].present?
    @tshirts = Tshirt.filter_by_character(params[:character]) if params[:character].present?
  end
  def new
    #before_action :authenticate_admin!
  end
  def create   
  end
  def edit
    @tshirt = Tshirt.find(params[:id])
  end
  def update
    @tshirt = Tshirt.find(params[:id])
    @tshirt.update(tshirt_params) 
    #render json: {status:"success"}
    redirect_to root_path
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
    @tshirts = Tshirt.all
  end

  private
  def tshirt_params
    params.require(:tshirt).permit(:color, :size, :character) 
  end
end
