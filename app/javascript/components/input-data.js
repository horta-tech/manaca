const clickSimulate = document.getElementById('click-simulate');
const simulateCard = document.getElementById('simulate-card');
const clickBtn = document.getElementById('click-btn');
const antButton = document.getElementById('ant-button');
const manacaBtn = document.querySelector('.manaca-btn');
const simulateField = document.getElementById('simulate');
const inputField = document.getElementById('input-data');

console.log(simulateField);
const input_change = () => {
  if(clickSimulate) {
    clickSimulate.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
      simulateField.classList.toggle('hidden');
      inputField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
  }
  if(simulateCard) {
    simulateCard.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
      simulateField.classList.toggle('hidden');
      inputField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
  }
  if(clickBtn) {
    clickBtn.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
      simulateField.classList.toggle('hidden');
      inputField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
  }
  if(antButton) {
    antButton.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
      simulateField.classList.toggle('hidden');
      inputField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
  }
}
export { input_change };
