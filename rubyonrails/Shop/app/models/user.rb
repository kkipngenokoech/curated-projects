class User < ApplicationRecord
    has_secure_password # this is the bycrpt ge, file.
    validates :name, presence: true, uniqueness: true
end
