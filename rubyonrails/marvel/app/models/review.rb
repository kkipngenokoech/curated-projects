class Review < ApplicationRecord
    belongs_to :tshirt
    belongs_to :user
end
