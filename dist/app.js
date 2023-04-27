"use strict";
// const anchor = document.querySelector('a')!;
// //return null since cannot be accessed in app.js
// // console.log(anchor.href);
// // if (anchor){
// //     console.log(anchor?.href)
// // }
// console.log(anchor.href);
//typecatsing
const form = document.querySelector('form');
// console.log(form.children);
//grab different input fields
//type casting
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//adding event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
