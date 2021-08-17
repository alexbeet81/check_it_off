class List < ApplicationRecord
  belongs_to :user
  has_many :categories, dependent: :destroy

  validates :name, presence: true

  def no_name
    self.name = "my list" if self.name.empty?
  end
end
