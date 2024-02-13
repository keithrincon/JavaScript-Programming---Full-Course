// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

// let countEl = document.getElementById('count-el');
// // assign var to element
// let count = 0;
// // assign value

// function increment() {
//   count = count + 1;
// //   give functionality
//   countEl.innerHTML = count;
// //   make it manipulate the dom
//   console.log(countEl);
// //   console log
// }

let countEl = document.getElementById('count-el');

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerHTML = count;
}

function save() {
  console.log(count);
}
