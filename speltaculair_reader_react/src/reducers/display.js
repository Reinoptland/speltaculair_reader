import { START_EXERCISE } from '../actions/start-exercise'
import { END_EXERCISE } from '../actions/end-exercise'

export default function updateDisplay(state = { displayOverview: true, displayExercise: false }, { type, payload }) {
  switch (type) {

    case START_EXERCISE :
      return state = { displayOverview: false, displayExercise: true }

    case END_EXERCISE :
      return state = { displayOverview: true, displayExercise: false }

    default :
      return state
  }
}
