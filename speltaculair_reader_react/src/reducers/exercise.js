import $ from 'jquery';

import { GET_EXERCISES } from '../actions/get-exercises'

export default function updateExercise(state = {}, { type, payload }) {
  switch (type) {
    case GET_EXERCISES :
      const exercises = $.ajax({
        type: "GET",
        url: "http://localhost:3000/exercises",
        data: JSON.stringify({
        }),
        contentType: "application/json",
        dataType: "json"})

        .fail(function(error) {
          console.log(error);
        });
      return exercises

    default :
      return state
  }
}
