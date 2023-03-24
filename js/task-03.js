const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// console.log(images);
// const head = document.createElement("h1");
// console.log(head);
// // document.body.prepend(head);
// // head.textContent = "Hello";
// const markup = "<h2>World</h2> <p>fffffff</p> "
// head.insertAdjacentHTML("beforeend", markup);


const list = document.querySelector('.gallery');
const newImages = images.map((elem) => `
<li>
 <img src="${elem.url}" alt="${elem.alt}" width="320" height="180">
</li>`).join("");
list.insertAdjacentHTML("afterbegin", newImages);
list.style.listStyle = "none";
list.style.display = "flex";
list.style.gap = "20px";

