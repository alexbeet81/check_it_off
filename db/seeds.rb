# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
List.destroy_all

puts "creating user...."

puts "creating seed lists...."

3.times do
  user = User.create!(email: Faker::Internet.email, password: "123456")
  puts "user #{user.email} ready!"
  3.times do
  list = List.create!(name: Faker::Food.fruits, user_id: user.id)
  puts "list #{list.name} ready!"
    2.times do
    category = Category.create!(category_name: Faker::Food.ingredient, list_id: list.id)
    puts "category #{category.category_name} ready!"
      4.times do
        item = Item.create!(item_name: Faker::Food.vegetables, category_id: category.id)
        puts "item #{item.item_name} ready!"
      end
    end
  end
end

puts "all done!!!! Lists: #{List.count}, Categories: #{Category.count}, Items: #{Item.count}!!!!!"

