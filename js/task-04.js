/* <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
</div> */

const button = document.querySelector("#counter");

button.addEventListener("click", () => {
  console.log("Button was clicked");
});