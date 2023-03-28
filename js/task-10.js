function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

function createBoxes() {
  const newStructEl = [];
  let size = 20;
  const divEl = document.querySelector("#boxes");
  for (let i = 0; i < inputEl.value; i += 1) {
    const elem = document.createElement("div");
    size = size + 10;
    elem.style.width = ${size}px;
    elem.style.height = ${size}px;
    elem.style.backgroundColor = getRandomHexColor();
    elem.style.marginTop = "10px";
    divEl.appendChild(elem);
    newStructEl.push(elem);
  }
}
function destroyClick() {
  const divDestrEl = document.querySelector("#boxes");
  divDestrEl.innerHTML = '';
}
createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyClick);
