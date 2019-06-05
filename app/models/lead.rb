class Lead < ApplicationRecord
  mount_uploader :invoice, InvoiceUploader
  # before_save :read_invoice
  validates :email, presence: true
  has_secure_token :token

  def to_param
    token
  end

  private

  def read_invoice
  end
end
