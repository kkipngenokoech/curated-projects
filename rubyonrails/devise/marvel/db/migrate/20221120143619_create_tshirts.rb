class CreateTshirts < ActiveRecord::Migration[7.0]
  def change
    create_table :tshirts do |t|
      t.string :color
      t.string :size
      t.string :character
      t.string :img_url

      t.timestamps
    end
  end
end
