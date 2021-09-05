class Api::V1::CategoriesController < Api::V1::BaseController
before_action :set_category, except: [:create]

  def create
    @category = Category.new(category_params)

    # @category.list = @list

    # gives category if it has no name.
    @category.no_name

    authorize @category

    if @category.save!
      redirect_to api_v1_lists_path
    else
      render_error
    end
  end

  def update
    @category.update

    authorize @category

    if @category.save
      redirect_to api_v1_list_path
    else
      render_error
    end
  end

  def destroy
    @category.destroy
    redirect_to api_v1_list_path
  end

  private

  def set_list
    @list = List.find(params[:list_id])
    authorize @list
    authorize @category
  end

  def category_params    
    params.require(:category).permit(:category_name, :list_id, :category_color, :category_icon)
    # params.require(:category).permit(:category_name, :list_id) if params[:category].present?
  end

  def render_error
    render json: { errors: @category.errors.full_messages },
      status: :unprocessable_entity
  end
end
