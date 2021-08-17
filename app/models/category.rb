class Category < ApplicationRecord
  belongs_to :list
  has_many :items, dependent: :destroy

  validates :category_name, presence: true
end
