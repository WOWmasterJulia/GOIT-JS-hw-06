/* <p><a href="index.html">Go back</a></p>

 <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const  inputClick = () => {
    if (inputEl.value === '') {
        spanEl.textContent = 'Anonymous';
    }
    else {
        spanEl.textContent = inputEl.value;
    };
};
inputEl.addEventListener('input', inputClick)