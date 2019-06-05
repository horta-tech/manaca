Rails.application.routes.draw do
  devise_for :users
  root to: 'leads#new'
  resources :leads, only: [:new, :create, :show, :update] do
    get 'contato', to: 'leads#contato'
    get 'success', to: 'leads#success'
  end
end
