class Comment < ApplicationRecord
    belongs_to :post
    validates :author, :comment, presence: true
end
