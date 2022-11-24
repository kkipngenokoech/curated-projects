class TshirtController < ApplicationController
  def index
    @tshirts = Tshirt.all

  end
  def new
  end
  def create   
  end

  def show
    if Tshirt.where(params[:id]) === nil
      flash[:notice] = "TShirt not found"
      redirect_to root_path
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
    respond_to do |format|
    format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
    format.json { head :no_content }
  end
  end

  def coord
    @tshirt = Tshirt.all
  end
end
