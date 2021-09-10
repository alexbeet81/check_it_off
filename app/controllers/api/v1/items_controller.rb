class Api::V1::ItemsController < Api::V1::BaseController
  before_action :set_item, only: [:update, :destroy]
  before_action :set_category, only: [:create]
  # skip_before_action :authenticate_user!
  
def create
  @item = Item.new(item_params)

  @list = @category.list

  @item.category = @category

  @item.no_name

  authorize @item

  if @item.save
    redirect_to api_v1_list_path
  else
    render_error
  end
end

def update
  authorize @item
  # @list = @category.list
  @item.toggle_item_selected

  # binding.pry

  if @item.update!(item_params)
    # @categoy = Category.find(@item.category_id)
    # @list = List.find(@categoy.list_id)
    redirect_to api_v1_lists_path
  else
    render_error
  end
end

def destroy
  @item.destroy

  redirect_to api_v1_list_path
end

private

def set_item
  @item = Item.find(params[:id])
  # authorize @item
end

def set_category
  @categoy = Category.find(params[:category_id])
  authorize @category
end

def item_params
  # binding.pry
  params[:category].present? ? params.require(:item).permit(:item_name, :item_selected, :unavailable, :category_id) : {}
end

def render_error
  render json: { errors: @item.errors.full_messages },
    status: :unprocessable_entity
end

end
