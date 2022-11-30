class AddAuthorToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :Author, :string
  end
end
