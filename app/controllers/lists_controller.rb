class ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy]

  def index
    ## display this list with the latest list at the top
    @lists = List.all

    ## TODO: Add a new list
    @list = List.new(list_params)
  end

  def show
    # TODO: Add category

    # Find all cattegories where the list == list_id
    # @categories = Category.where(id: list_id)
  end

  def create
    @list = List.new(list_params)

    if @list.save
      redirect_to lists_path
    else
      render :new
    end
  end

  def update
    @list.update(list_params)

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
    params.require(:list).permit(:name)
  end

  def set_list
    @list = List.find(params[:id])
  end
end
