class AddExerciseToStep < ActiveRecord::Migration[5.0]
  def change
    add_reference :steps, :exercise, foreign_key: true
  end
end
