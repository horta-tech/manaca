class CreateLeads < ActiveRecord::Migration[5.2]
  def change
    create_table :leads do |t|
      t.string :email
      t.string :cnpj
      t.integer :invoice_amount_cents
      t.date :invoice_due
      t.string :name
      t.string :phone
      t.string :address
      t.string :invoice

      t.timestamps
    end
  end
end
