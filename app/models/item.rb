class Item < ApplicationRecord
  belongs_to :category

  validates :item_name, presence: true
end
