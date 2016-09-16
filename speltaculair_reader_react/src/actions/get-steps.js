export const START_EXERCISE = 'START_EXERCISE'

export default function startExercise(exercise_id) {
  return {
    type: START_EXERCISE,
    payload: exercise_id
  }
}
