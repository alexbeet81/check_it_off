class ItemsController < ApplicationController
    before_action :set_item, only: [:update, :destroy]
    before_action :set_category, only: [:create]
    # before_action :set_list, only: [:update]

    def create
        @item = Item.new(item_params)
        @list = @category.list
        @item.category = @category
        @item.no_name
        
        if @item.save!
          redirect_to list_path(@list)
        else
          render 'lists/show'
        end
    end

    def update
      @category = @item.category
      @list = @category.list
      @item.update(item_params)
      @item.no_name

      if @item.save
        redirect_to list_path(@list)
      else
        render 'lists/show'
      end
    end

    def destroy
        @category = @item.category
        @list = @category.list

        @item.destroy

        redirect_to list_path(@list)
    end


    private

    def item_params
        params.require(:item).permit(:item_name, :item_selected, :unavailable, :category_id)
    end

    def set_category
        @category = Category.find(params[:category_id])
    end

    # def set_list
    #     @list = List.find(params[:list_id])
    # end

    def set_item
        @item = Item.find(params[:id])
    end
end
