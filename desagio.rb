  def calculate_desagio(valor, taxa, prazo)
    desagio = (valor * ((1 + taxa/100.0)**(prazo / 30.0))) - valor
  end

  puts calculate_desagio(13251.50, 3.18, 5)
