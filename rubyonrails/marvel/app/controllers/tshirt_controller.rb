class TshirtController < ApplicationController
  def create
  end

  def store
    @image = Cloudinary::Uploader.upload(params[:media])
    @tshirt = Tshirt.new({:color => params[:color], :size => params[:size],:character => params[:character], :img_url => @image['secure_url']})
    @tshirt.save
    redirect_to ('/')
  end
end
