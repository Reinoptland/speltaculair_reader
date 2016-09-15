import $ from 'jquery';

import { START_EXERCISE } from '../actions/start-exercise'

export default function updateStep(state = [], { type, payload }) {
  switch (type) {
    case START_EXERCISE :
      const currentExercise = $.ajax({
        type: "GET",
        url: "http://localhost:3000/exercises/" + payload + "/steps",
        data: JSON.stringify({
        }),
        contentType: "application/json",
        dataType: "json",
        async: false
        })

        .fail(function(error) {
          console.log(error);
        })
      return currentExercise.responseJSON

    default :
      return state
  }
}
