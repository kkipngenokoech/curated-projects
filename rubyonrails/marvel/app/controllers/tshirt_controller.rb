class TshirtController < ApplicationController
  def create
  end

  def store
    @tshirt = Tshirt.new({:color => params[:color], :size => params[:size],:character => params[:character]})
    @tshirt.save
    redirect_to ('/')
  end
end
