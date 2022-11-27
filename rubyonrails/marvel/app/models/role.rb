class Role < ApplicationRecord::Base
    validates :name, presence: true, uniqueness: true
end
