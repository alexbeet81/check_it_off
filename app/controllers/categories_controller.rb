class CategoriesController < ApplicationController
  before_action :set_category, except: [:create]
  before_action :set_list, only: :create
  
  def create
    @category = Category.new(category_params)

    @category.list = @list

    @category.no_name

    if @category.save!
      redirect_to list_path(@list)
    else
      render "list/show"
    end
  end

  def update
    @list = @category.list
    @category.update(category_params)
    @category.no_name
    if @category.save
      redirect_to list_path(@list)
    else
      render "list/show"
    end
  end

  def destroy
    @list = @category.list
    @category.destroy

    redirect_to list_path(@list)
  end

  private

  def category_params
    binding.pry
    
    params.require(:category).permit(:category_name, :list_id)
  end

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_category
    @category = Category.find(params[:id])
  end
end
