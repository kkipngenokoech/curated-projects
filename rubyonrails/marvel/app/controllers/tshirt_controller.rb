class TshirtController < ApplicationController
  def create
    
  end

  def store
    @image = Cloudinary::Uploader.upload(params[:media])
    @tshirt = Tshirt.new({:color => params[:color], :size => params[:size],:character => params[:character], :img_url => @image['secure_url']})
    @tshirt.save
    redirect_to ('/')
  end

  def destroy
    @tshirt = Tshirt.find(params[:id])
    @tshirt.destroy
    redirect_to tshirts_url, notice: "the t-shirt was successfully destroyed"
    
  end

  def filter
  end
end
