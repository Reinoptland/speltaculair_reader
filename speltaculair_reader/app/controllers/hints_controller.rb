class HintsController < ApplicationController
  before_action :load_hint, except: [:index, :create]

  def index
    @hints = Hint.where(:step_id => (params[:step_id]))
    render json: @hints
  end

  def show
    render_hint
  end

  def create
    @hint = Hint.new(hint_params)

    if @hint.save
      render_hint status: :created
    else
      render_errors
    end
  end

  def update
    if @hint.update(hint_params)
      render_hint status: 226
    else
      render_errors
    end
  end

  def destroy
    if @hint.destroy
      head :ok
    else
      render_errors "Could not destroy this hint, sorry"
    end
  end

  private

  def hint_params
    params.require(:hint).permit(:hint_text, :solution, :solution_text, :step_id)
  end

  def render_hint(status:  200)
    render json: @hint, status: status
  end

  def render_errors(errors = nil)
    errors ||= @hint.errors
    render json: { errors: errors }, status: :unprocessible_entity
  end

  def load_hint
    @hint = Hint.find(params[:id])
  end
end
