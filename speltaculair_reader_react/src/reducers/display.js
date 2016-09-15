import { START_EXERCISE } from '../actions/start-exercise'

export default function updateDisplay(state = { displayOverview: true, displayExercise: false }, { type, payload }) {
  switch (type) {

    case START_EXERCISE :
      return state = { displayOverview: false, displayExercise: true }

    default :
      return state
  }
}
