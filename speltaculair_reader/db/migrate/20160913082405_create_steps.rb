class CreateSteps < ActiveRecord::Migration[5.0]
  def change
    create_table :steps do |t|
      t.text :instruction
      t.boolean :completed

      t.timestamps
    end
  end
end
