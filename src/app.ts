// const anchor = document.querySelector('a')!;
// //return null since cannot be accessed in app.js
// // console.log(anchor.href);

// // if (anchor){
// //     console.log(anchor?.href)
// // }

// console.log(anchor.href);

//typecatsing
const form = document.querySelector('form') as HTMLFormElement;

// console.log(form.children);

//grab different input fields
//type casting
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//adding event listener

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})





