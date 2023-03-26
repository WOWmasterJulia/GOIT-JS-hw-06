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


// +++++++++++++++ ВАРИАНТ 1 +++++++++++++++++
  
// const formEl = document.querySelector(".login-form");
// formEl.addEventListener("submit", checkSubmit);

// function checkSubmit(event) {
//     event.preventDefault();
//    const {
//     elements: { email, password }
//     } = event.currentTarget; 
//     if (email.value.trim() === "" || password.value.trim() === "") {
//     return alert("Please fill in all the fields!");
//     }
//     const result = {
//         [email.name] : email.value.trim(),
//         [password.name] : password.value.trim(),
//     };
//     console.log(result);
//     event.currentTarget.reset();
// };


// +++++++++++++++ ВАРИАНТ 2 +++++++++++++++++
// Global object +++++++++++++++
  
// const formEl = document.querySelector(".login-form");

// const result = {};
// formEl.addEventListener("submit", checkSubmit);
// function checkSubmit(event) {
//     event.preventDefault();
//    const {
//     elements: { email, password }
//     } = event.currentTarget; 
//     if (email.value.trim() === "" || password.value.trim() === "") {
//     return alert("Please fill in all the fields!");
//   }
//     result[email.name] = email.value;
//     result[password.name] = password.value;
//     event.currentTarget.reset();
// };
// console.log(result);


// +++++++++++++++ ВАРИАНТ 3 +++++++++++++++++
// Не учитывает пробел до и после введенного теекста +++++++++++++++

// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", checkSubmit);
// function checkSubmit(event) {
//     event.preventDefault();
//    const {
//     elements: { email, password }
//     } = event.currentTarget; 
//     if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }
//   console.log(`Еmail: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// };

// +++++++++++++++ ВАРИАНТ 4 +++++++++++++++++
// НЕ передает данные, только показывает. Трим только на Пароле и можно ставить пробелы(обнуляются)!!!!

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
    console.log({ email:email.value, password:password.value.trim() })
    event.currentTarget.reset();
};