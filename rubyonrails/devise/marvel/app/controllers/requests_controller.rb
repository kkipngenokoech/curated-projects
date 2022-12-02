class RequestsController < ApplicationController
  def new
  end
  def create
    redirect_to request_box_path
  end
end
