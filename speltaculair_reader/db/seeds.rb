Report.delete_all
Hint.delete_all
Step.delete_all
Exercise.delete_all
User.delete_all

rein = User.create( email: 'rein@test.com', password: 'abcd1234' )

Exercise.create([
  {name: "Loops", description: "Learn how to loop!"},
  {name: "Variables", description: "Learn to pronounce variables properly" },
])

Report.create([
  {current_step: 0, finished: false, hints_asked: 0, user_id: 1, exercise_id: 1, },
])

Step.create([
  {instruction: "Here we go! We're looping!", completed: false, exercise_id: 1, },
  ])

Hint.create([
  {hint_text: "so here is a hint on loops..", solution_text: "and here is the solution", solution: "an image url with th picture resides here", step_id: 1, },
  ])

puts "created #{User.all.length} users"
puts "created #{Exercise.all.length} exercises"
puts "created #{Step.all.length} steps"
puts "created #{Report.all.length} reports"
puts "created #{Hint.all.length} hints"
