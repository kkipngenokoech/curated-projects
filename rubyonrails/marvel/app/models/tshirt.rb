class Tshirt < ApplicationRecord
    has_many :review
    has_many :request
    has_many :user
end
