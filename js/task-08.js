/* <form class="login-form">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form> */
// const mailEl = document.querySelector("#");
// const pasEl = document.querySelector("#");

const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", checkSubmit);

function checkSubmit(event) {
    event.preventDefault();
   const {
    elements: { email, password }
    } = event.currentTarget; 
    if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
    }
    const result = {
        [email.name] : email.value.trim(),
        [password.name] : password.value.trim(),
    };
    console.log(result);
    event.currentTarget.reset();
};