class ReportsController < ApplicationController
  before_action :load_report, except: [:index, :create]

  def index
    @reports = Report.where(:user_id => (params[:user_id]))
    render json: @reports
  end

  def show
    render_report
  end

  def create
    @report = Report.new(report_params)

    if @report.save
      render_report status: :created
    else
      render_errors
    end
  end

  def update
    if @report.update(report_params)
      render_report status: 226
    else
      render_errors
    end
  end

  def destroy
    if @report.destroy
      head :ok
    else
      render_errors "Could not destroy this report, sorry"
    end
  end

  private

  def report_params
    params.require(:report).permit(:report_text, :solution, :solution_text, :step_id)
  end

  def render_report(status:  200)
    render json: @report, status: status
  end

  def render_errors(errors = nil)
    errors ||= @report.errors
    render json: { errors: errors }, status: :unprocessible_entity
  end

  def load_report
    @report = Report.find(params[:id])
  end
end
