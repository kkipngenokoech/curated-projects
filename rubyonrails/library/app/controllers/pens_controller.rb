class PensController < ApplicationController
  before_action :set_pen, only: %i[ show edit update destroy ]

  # GET /pens or /pens.json
  def index
    @pens = Pen.all
  end

  # GET /pens/1 or /pens/1.json
  def show
  end

  # GET /pens/new
  def new
    @pen = Pen.new
  end

  # GET /pens/1/edit
  def edit
  end

  # POST /pens or /pens.json
  def create
    @pen = Pen.new(pen_params)

    respond_to do |format|
      if @pen.save
        format.html { redirect_to pen_url(@pen), notice: "Pen was successfully created." }
        format.json { render :show, status: :created, location: @pen }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @pen.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pens/1 or /pens/1.json
  def update
    respond_to do |format|
      if @pen.update(pen_params)
        format.html { redirect_to pen_url(@pen), notice: "Pen was successfully updated." }
        format.json { render :show, status: :ok, location: @pen }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @pen.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pens/1 or /pens/1.json
  def destroy
    @pen.destroy

    respond_to do |format|
      format.html { redirect_to pens_url, notice: "Pen was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pen
      @pen = Pen.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pen_params
      params.fetch(:pen, {})
    end
end
