class AddInfoToLeads < ActiveRecord::Migration[5.2]
  def change
    add_column :leads, :invoice_payload, :jsonb
    add_column :leads, :variable_fee, :float
    add_column :leads, :discount, :float
    add_column :leads, :invoice_amount, :float
    add_column :leads, :receivable, :float
    remove_column :leads, :invoice_amount_cents, :integer
    remove_column :leads, :invoice_due, :date
  end
end
