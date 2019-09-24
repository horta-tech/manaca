const clickSimulate = document.getElementById('click-simulate');
const simulateCard = document.getElementById('simulate-card');
const clickBtn = document.getElementById('click-btn');
const antButton = document.getElementById('ant-button');
const inputField = document.getElementById('input-data');

const input_change = () => {
  if(clickSimulate) {
    clickSimulate.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
    })
  }
  if(simulateCard) {
    simulateCard.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
    })
  }
  if(clickBtn) {
    clickBtn.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
    })
  }
  if(antButton) {
    antButton.addEventListener('click', () => {
      inputField.classList.toggle('hidden');
    })
  }
}
export { input_change };
