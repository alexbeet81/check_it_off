class Category < ApplicationRecord
  belongs_to :list
  has_many :items, dependent: :destroy

  validates :category_name, presence: true

  def no_name
    self.category_name = "my category" if self.category_name.empty?
  end
end
