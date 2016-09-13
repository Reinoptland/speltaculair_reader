Rails.application.routes.draw do
  devise_for :users, :path => 'accounts'

  resources :users do
    resources :reports
  end

  resources :exercises do
      resources :steps do
        resources :hints
      end
  end

end
