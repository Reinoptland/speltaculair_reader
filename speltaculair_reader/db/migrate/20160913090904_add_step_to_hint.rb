class AddStepToHint < ActiveRecord::Migration[5.0]
  def change
    add_reference :hints, :step, foreign_key: true
  end
end
