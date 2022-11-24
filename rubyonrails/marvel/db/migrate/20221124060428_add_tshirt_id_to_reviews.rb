class AddTshirtIdToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :tshirt_id, :integer

  end
end
