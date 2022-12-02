class RequestsController < ApplicationController
  include ActionDispatch::Routing::UrlFor
  def new
  end
  def create
    # redirect_to request_box_path
    redirect_to request_box_path

  end
end
