const clickSimulate = document.getElementById('click-simulate');
const simulateCard = document.getElementById('simulate-card');
const clickBtn = document.getElementById('click-btn');
const antButton = document.getElementById('ant-button');
const manacaBtn = document.querySelector('.manaca-btn');
const inputField = document.getElementById('input-data');

const input_change = () => {
  if(clickSimulate) {
    clickSimulate.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
      inputField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
  }
  if(simulateCard) {
    simulateCard.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
      inputField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
  }
  if(clickBtn) {
    clickBtn.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
      inputField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
  }
  if(antButton) {
    antButton.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
      inputField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
  }
}
export { input_change };
