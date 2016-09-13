class Step < ApplicationRecord
  belongs_to :exercise
  has_many :hints
end
