class Post < ApplicationRecord
    # to ensure that all fields are entered before creating a post:
    validates :quote, :image, presence: true
    has_many :comments
end
