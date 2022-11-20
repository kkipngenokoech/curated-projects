class WelcomeController < ApplicationController
  def index
    # render html: "Hello and welcome to multiverse"
    @tshirts = Tshirt.all
  end
end
