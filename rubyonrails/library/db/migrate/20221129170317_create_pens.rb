class CreatePens < ActiveRecord::Migration[7.0]
  def change
    create_table :pens do |t|

      t.timestamps
    end
  end
end
