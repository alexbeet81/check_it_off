class Item < ApplicationRecord
  belongs_to :category

  validates :item_name, presence: true

  def no_name
    self.item_name = "uhhhh cat food????" if self.item_name.empty?
  end

  def toggle_item_selected
    self.item_selected ? self.item_selected = false : self.item_selected = true
  end
end
