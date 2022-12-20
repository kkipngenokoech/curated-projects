class AddQueryToForms < ActiveRecord::Migration[7.0]
  def change
    add_column :forms, :query, :string
  end
end
