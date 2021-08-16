class AddDefaultNameToList < ActiveRecord::Migration[6.1]
  def change
    change_column_default(:lists, :name, "list")
  end
end
