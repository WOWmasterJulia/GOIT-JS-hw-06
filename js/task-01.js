const catEl = document.querySelectorAll('.item');
console.log(catEl);
console.log('Number of categories:', catEl.length);
catEl.forEach(function (elem) {
    const itemEl = elem.querySelector('h2');
    const itemsEl = elem.querySelectorAll('li');
    console.log('Category:', itemEl.textContent);
    console.log('Elements:', itemsEl.length)
});


// console.log(document);

// const listWithId = document.querySelector('#categories');
// console.log(listWithId);

// item.forEach(function () {
//   console.log(`Number of categories: ${}`);
// });

// console.log(`Number of categories: ${listWithId}`);

// 13\48 Mod4
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };