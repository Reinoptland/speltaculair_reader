class CreateHints < ActiveRecord::Migration[5.0]
  def change
    create_table :hints do |t|
      t.text :hint_text
      t.string :solution
      t.text :solution_text

      t.timestamps
    end
  end
end
