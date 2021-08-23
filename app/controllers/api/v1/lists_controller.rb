class Api::V1::ListsController < Api::V1::BaseController
  def index
    @lists = policy_scope(List)
  end
end
