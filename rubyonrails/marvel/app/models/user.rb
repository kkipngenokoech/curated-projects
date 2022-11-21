class User < ApplicationRecord
    has_secure_password
    has_one_attached :image
    has_many :reviews

    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }

end
