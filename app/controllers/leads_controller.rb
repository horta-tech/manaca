class LeadsController < ApplicationController
  skip_before_action :authenticate_user!

  def contato
    @lead = Lead.find_by!(token: params[:lead_id])
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "Ocorreu um erro."
    redirect_to root_url
  end

  def show
    @lead = Lead.find_by!(token: params[:id])
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "Ocorreu um erro."
    redirect_to root_url
  end

  def update
    @lead = Lead.find_by!(token: params[:id])
    if @lead.update(lead_params)
      redirect_to lead_success_path(@lead)
    else
      render :contato
    end
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "Ocorreu um erro."
    redirect_to root_url
  end

  def success
  end

  def new
    @lead = Lead.new
  end

  def create
    @lead = Lead.new(lead_params)
    xml = params[:lead][:invoice].read
    invoice = Hash.from_xml(xml)

    @lead.invoice_payload = invoice

    @lead.cnpj = invoice["nfeProc"]["NFe"]["infNFe"]["emit"]["CNPJ"]

    duplicates = invoice["nfeProc"]["NFe"]["infNFe"]["cobr"]["dup"]

    variable_fee_percentage = rand(2.8..3.2).round(2)
    fixed_fee = 50

    total_discount = 0
    total_value = 0

    # Cálculo dos vários deságios de uma nota

    duplicates.each do |dup|
      amount = dup["vDup"].to_f
      invoice_due = dup["dVenc"].to_date
      days_until_due = difference_in_days(invoice_due)
      days_until_due = 0 if days_until_due.negative?
      discount = calculate_discount(amount, variable_fee_percentage, days_until_due)
      discount = 0 if discount.negative?
      total_discount += discount
      total_value += amount
    end

    receivable = total_value - total_discount - fixed_fee

    @lead.invoice_amount = total_value
    @lead.discount = total_discount
    @lead.variable_fee = variable_fee_percentage
    @lead.receivable = receivable

    if @lead.save
      redirect_to lead_path(@lead)
    else
      render :new
    end
  rescue REXML::ParseException
    flash[:alert] = "Ocorreu um erro no upload. Favor carregar sua nota em formato XML."
    render :new
  end

  private

  def calculate_discount(amount, variable_fee_percentage, days_until_due)
    (amount * ((1 + variable_fee_percentage / 100.0)**(days_until_due / 30.0))) - amount
  end

  def difference_in_days(date)
    due = date
    current = Date.today
    difference_in_days = (due.jd - current.jd).to_i
  end

  def lead_params
    params.require(:lead).permit(
      :invoice,
      :email,
      :name,
      :phone,
      :address
    )
  end
end



    def set_post
      @post = Post.find_by!(slug: params[:id])
    rescue ActiveRecord::RecordNotFound
      flash[:alert] = "Post not found."
      redirect_to root_url
    end
