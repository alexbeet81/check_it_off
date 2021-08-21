class List < ApplicationRecord
  belongs_to :user
  has_many :categories, dependent: :destroy

  validates :name, presence: true

  def no_name
    self.name = "my list" if self.name.empty?
  end

  def default_cat
    cat = Category.new(category_name: "My List")
    cat.list_id = self.id
    cat.save
  end
end
