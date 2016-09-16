import $ from 'jquery';

import { START_EXERCISE } from '../actions/start-exercise'
import { NEXT_STEP } from '../actions/next-step'

export default function updateHints(state = {}, { type, payload }) {
  switch (type) {

    case START_EXERCISE :

      const hints = $.ajax({
        type: "GET",
        url: "http://localhost:3000/exercises/" + payload + "/steps/1/hints" ,
        data: JSON.stringify({
        }),
        contentType: "application/json",
        dataType: "json",
        async: false
        })

        .fail(function(error) {
          console.log(error);
      })

      return state = { hints: hints.responseJSON , hintInfo: { currentExercise: payload, currentStep: 0 } }

    case NEXT_STEP :
      const stepadress = payload + 1
      const nexthint = $.ajax({
        type: "GET",
        url: "http://localhost:3000/exercises/" + state.hintInfo.currentExercise + "/steps/" + stepadress + "/hints" ,
        data: JSON.stringify({
        }),
        contentType: "application/json",
        dataType: "json",
        async: false
        })

        .fail(function(error) {
          console.log(error);
      })
      return Object.assign({}, state, { hints: nexthint.responseJSON, hintInfo: { currentStep: payload }  })

    default :
      return state
  }
}
