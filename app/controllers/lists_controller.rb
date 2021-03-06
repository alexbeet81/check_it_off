class ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy]

  def index
    ## display this list with the latest list at the top
    @lists = List.all
    

    ## TODO: Add a new list
    @list = List.new
  end

  def show
    # categories saved into variable and sorted by created at
    @categories = @list.categories.sort_by(&:created_at)

    # TODO: Add category
    @last_id = Category.last.id

    @category = Category.new
    @item = Item.new

    # Find all cattegories where the list == list_id
    # @categories = Category.where(id: list_id)
  end

  def shopping
    @list = List.find(params[:list_id])

    # only saves categories that have at least one item.
    @categories = @list.categories.select {|category| category.items.length > 0 }
  end

  def create
    @list = List.new(list_params)
    @list.user = current_user

    # @list.name = "BOOOO" if @list.name.empty?

    @list.no_name

    if @list.save!
      @list.default_cat
      redirect_to lists_path
    else
      render :new
    end
  end

  def update
    @list.update(list_params)
    @list.no_name
    if @list.save
      redirect_to lists_path
    else
      render :index
    end
  end

  def destroy
    @list.destroy

    redirect_to lists_path
  end

  private

  def list_params
    params.require(:list).permit(:name, :user_id)
  end

  def set_list
    @list = List.find(params[:id])
  end
end
