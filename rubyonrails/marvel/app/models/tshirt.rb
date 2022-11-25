class Tshirt < ApplicationRecord
    #include Filterable
    scope :filter_by_color, -> (color) {where color: color}
    scope :filter_by_size, -> (size) {where size: size}
    scope :filter_by_character, -> (character) {where character: character}
    has_many :review
    has_many :request
    has_many :user
    #acts_as_taggable_on :colors, :sizes, :characters
end
