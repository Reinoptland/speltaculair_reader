import { START_EXERCISE } from '../actions/start-exercise'
import { NEXT_STEP } from '../actions/next-step'

export default function updateExerciseStatus(state = {}, { type, payload }) {
  switch (type) {

    case START_EXERCISE :
      return state = { currentExercise: payload, currentStep: 0, exerciseCompleted: false }

    case NEXT_STEP :
      return Object.assign({}, state, { currentStep: payload })
    default :
      return state
  }
}
