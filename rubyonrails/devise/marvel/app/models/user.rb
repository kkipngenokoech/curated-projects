class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
   # has_secure_password
    has_one_attached :image
    has_many :reviews

    enum role: [:user, :admin]
    after_create :set_default_role
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }

    private
    def set_default_role
      self.role ||= :user
    end

end
