import "bootstrap";


const load_and_click = (event) => {
  event.preventDefault();
  if (document.getElementById('lead_invoice').value !== '') {
    let loading = document.getElementById('loading');
    calculateButton.classList.add('hidden')
    loading.classList.remove('hidden')
    setTimeout(() => {
      leadSubmit.click();
    }, 3000);
  }
    else {
      document.getElementById('nota_errors').innerHTML = `<p class="error-message">Você precisa fazer upload de um arquivo XML.</p>`;
  }
}


let leadSubmit = document.getElementById('lead_submit')
let calculateButton = document.getElementById('calculate_button')

if (calculateButton) {
  calculateButton.addEventListener('click', load_and_click)
}
