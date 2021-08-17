class Category < ApplicationRecord
  belongs_to :list
  has_many :items, dependent: :destroy

  validates :name, presence: true
end
