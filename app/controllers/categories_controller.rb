class CategoriesController < ApplicationController
  before_action :set_category, except: [:create]
  before_action :set_list
  def create
    @category = Category.new(category_params)
    @category.list = @list

    if @category.save
      redirect_to list_path(@list)
    else
      render "list/show"
    end

  end

  def destroy
    @category.destroy

    redirect_to list_path(@list)
  end

  private

  def category_params
    params.require(:category).permit(:category_name, :list_id)
  end

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_category
    @category = Category.find(params[:id])
  end

end
