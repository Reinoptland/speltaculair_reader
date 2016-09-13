class StepsController < ApplicationController
  before_action :load_step, except: [:index, :create]

  def index
    @steps = Step.where(:exercise_id => (params[:exercise_id]))
    render json: @steps
  end

  def show
    render_step
  end

  def create
    @step = Step.new(step_params)

    if @step.save
      render_step status: :created
    else
      render_errors
    end
  end

  def update
    if @step.update(step_params)
      render_step status: 226
    else
      render_errors
    end
  end

  def destroy
    if @step.destroy
      head :ok
    else
      render_errors "Could not destroy this step, sorry"
    end
  end

  private

  def step_params
    params.require(:step).permit(:instruction, :completed, :exercise_id)
  end

  def render_step(status:  200)
    render json: @step, status: status
  end

  def render_errors(errors = nil)
    errors ||= @step.errors
    render json: { errors: errors }, status: :unprocessible_entity
  end

  def load_step
    @step = Step.find(params[:id])
  end
end
