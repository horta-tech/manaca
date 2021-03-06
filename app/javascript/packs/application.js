import { input_change } from "../components/input-data"
import "bootstrap";
// import $ from 'jquery';
import 'slick-carousel';



input_change();

const simulateField = document.getElementById('simulate');
const leadInfo = document.getElementById("lead-info");
const wrapper = document.getElementById("wrapper");
const success = document.getElementById("success");
if (leadInfo || wrapper || success) {
  const inputField = document.getElementById('input-data');
  inputField.classList.remove('hidden');
  simulateField.classList.add('hidden');
  inputField.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

const load_and_click = (event) => {
  event.preventDefault();
  if (document.getElementById('lead_invoice').value !== '') {
    let loading = document.getElementById('loading');
    calculateButton.classList.add('hidden');
    loading.classList.remove('hidden');
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

const setFilename = (event) => {
  if (event) {
    let fileArray = event.target.value.split('\\');
    document.getElementById('invoice_filename').innerHTML = fileArray[fileArray.length - 1];
  }
}

let fileInput = document.getElementById('lead_invoice')
if (fileInput) {
  fileInput.addEventListener('change', setFilename)
}

if (fileInput) {
  setFilename();
}

$("#slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000
});
