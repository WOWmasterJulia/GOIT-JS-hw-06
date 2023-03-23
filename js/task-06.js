/*  <p><a href="index.html">Go back</a></p>

    <input
      type="text"
      id="validation-input"
      data-length="6"
      placeholder="Please enter 6 symbols"
    /> */
// const inputEl = document.querySelector("#validation-input");



const inpEl = document.querySelector("#validation-input");
const inputClick = (event) => {
    if (inpEl.value.length === Number(inpEl.getAttribute("data-length"))) {
        inpEl.classList.remove("invalid");
        inpEl.classList.add("valid");
    }
    else {
        inpEl.classList.remove("valid");
        inpEl.classList.add("invalid");
    };
};
inpEl.addEventListener('blur', inputClick);

