const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const head = document.createElement("h1");
// console.log(head);
// document.body.prepend(head);
// head.textContent = "Hello";
// const markup = "<h2>World</h2> <p>fffffff</p> "
// head.insertAdjacentHTML("beforeend", markup);


const newElem = [];
const ulElem = document.querySelector('#ingredients');
for (const i of ingredients) {
  const elem = document.createElement("li");
  elem.textContent = i;
  elem.classList.add('item');
  newElem.push(elem);
}
ulElem.append(...newElem);


//  console.log(newElem);
// console.log(item.textContent);
// console.log(elem);
