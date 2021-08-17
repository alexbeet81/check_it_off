Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :lists do
    get "/shopping", to: "lists#shopping"
    resources :categories, only: [:create] do 
      resources :items, only: [:create]
    end
  end
  resources :items, only: [:update, :destroy]
  resources :categories, only: [:update, :destroy]
end