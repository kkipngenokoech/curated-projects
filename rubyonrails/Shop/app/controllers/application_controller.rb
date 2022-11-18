class ApplicationController < ActionController::Base
    def hello
        render html: "Hello marvelers"
    end
end
