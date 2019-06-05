Rails.application.routes.draw do
  devise_for :users
  root to: 'leads#new'
  resources :leads, only: [:new, :create, :show] do
    get 'contato', to: 'leads#contato'
  end
end
