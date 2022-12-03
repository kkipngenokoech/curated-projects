class ChangeFieldSize < ActiveRecord::Migration[7.0]
  def change
    change_column :tshirts, :size, :string
  end
end
