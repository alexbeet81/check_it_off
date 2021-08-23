json.array! @lists do |list|
  json.extract! list, :id, :name, :user_id
end
