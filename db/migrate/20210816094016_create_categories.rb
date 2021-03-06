class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :category_name
      t.string :category_color
      t.string :category_icon
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
