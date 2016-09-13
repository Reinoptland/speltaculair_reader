class ExercisesController < ApplicationController
  before_action :load_exercise, except: [:index, :create]

  def index
    @exercises = Exercise.all
    render json: @exercises
  end

  def show
    render_excercise
  end

  def create
    @exercise = Excercise.new(exercise_params)

    if @exercise.save
      render_excercise status: :created
    else
      render_errors
    end
  end

  def update
    if @exercise.update(exercise_params)
      render_excercise status: 226
    else
      render_errors
    end
  end

  def destroy
    if @exercise.destroy
      head :ok
    else
      render_exercise_errors "Could not destroy this exercise"
    end
  end

  private

  def exercise_params
    params.require(:exercise).permit(:name, :description)
  end

  def render_exercise(status:  200)
    render json: @exercise, status: status
  end

  def render_exercise_errors(errors = nil)
    errors ||= @exercise.errors
    render json: { errors: errors }, status: :unprocessible_entity
  end

  def load_exercise
    @exercise = Exercise.find(params[:id])
  end
end
