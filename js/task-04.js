let counterValue = 0; 

const valueSpan = document.getElementById("value"); 

const incrementButton = document.querySelector('button[data-action="increment"]'); 
const decrementButton = document.querySelector('button[data-action="decrement"]'); 


function increment() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
}


function decrement() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
}


incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
