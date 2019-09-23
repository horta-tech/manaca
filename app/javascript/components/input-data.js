const clickSimulate = document.getElementById('click-simulate');
const simulateCard = document.getElementById('simulate-card');
const clickBtn = document.getElementById('click-btn');
const inputField = document.getElementById('input-data');

console.log(simulateCard);
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
  scrollTo(inputField);
}
export { input_change };
