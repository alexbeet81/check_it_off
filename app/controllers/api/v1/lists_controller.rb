class Api::V1::ListsController < Api::V1::BaseController
  before_action :set_list, only: [:show, :update, :destroy]
  def index
    @lists = policy_scope(List)
    authorize @lists
  end

  def show
  end

  def create
    @list = List.new(list_params)
    @list.user = current_user
    @list.no_name
    authorize @list

    if @list.save
      redirect_to api_v1_lists_path
    else
      render_error
    end
  end

  def update
    @list.update(list_params)
    @list.no_name
    if @list.save
      redirect_to api_v1_lists_path
    else
      render_error
    end
  end

  def destroy
    @list.destroy
    redirect_to api_v1_lists_path
  end

  private

  def set_list
    @list = List.find(params[:id])
    authorize @list
  end

  def list_params
    params.require(:list).permit(:name, :user_id)
  end

  def render_error
    render json: { errors: @list.errors.full_messages },
      status: :unprocessable_entity
  end
end
