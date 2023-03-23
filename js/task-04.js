/* <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
</div> */


let counterValue = 0;
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const spanElem = document.querySelector("#value");

const btnClick = (event) => {
    switch (event.currentTarget.dataset.action) {
        case 'decrement': counterValue -= 1;
            break;
        case 'increment': counterValue += 1;
            break;
    };
    spanElem.textContent = counterValue;
  // spEl.innerHTML = String(counterValue);
  
};
btnDecrementEl.addEventListener('click', btnClick);
btnIncrementEl.addEventListener('click', btnClick);