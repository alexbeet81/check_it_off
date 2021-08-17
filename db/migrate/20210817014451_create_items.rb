class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.boolean :item_selected, default: false
      t.boolean :unavailable, default: false
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
