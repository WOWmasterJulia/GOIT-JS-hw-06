/* <input id="font-size-control" type="range" min="16" max="96" />
    <br />
    <span id="text">Abracadabra!</span> */

// const inpEl = document.querySelector("#font-size-control");


const inpEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
const inputClick = () => {
    spanEl.style.fontSize = inpEl.value + "px"
    // console.log(inpEl.value);
    // console.log('fs', spanEl.style.fontSize);
};
inpEl.addEventListener('input', inputClick);
console.log(inpEl.value);
console.log('fs', spanEl.style.fontSize);