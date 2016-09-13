class Exercise < ApplicationRecord
  has_many :steps
  has_many :reports
  has_many :users, through: :reports
end
