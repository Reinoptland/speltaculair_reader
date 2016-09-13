class CreateReports < ActiveRecord::Migration[5.0]
  def change
    create_table :reports do |t|
      t.integer :current_step
      t.boolean :finished
      t.integer :hints_asked
      t.references :user, foreign_key: true
      t.references :exercise, foreign_key: true

      t.timestamps
    end
  end
end
