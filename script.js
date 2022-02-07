'use strict';
/*
const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src){
const script=document.createElement('script');
script.async = false;
script.src = src;
document.body.append(script);
}

loadScript('js/test.js');
loadScript('js/some.js');
*/
// const btns =  document.querySelectorAll('button'),
// wrapper=document.querySelector('.btn-block');
// console.log(wrapper);
// // // console.log(btns[0].classList.length);
// // // console.log(btns[0]);
// // // console.log(btns[0].classList.item(0));
// // console.log(btns[1].classList.add('red','trrrrrrrttt'));
// // // console.log(btns[0].classList.remove('blue'));
// // console.log(btns[0].classList.toggle('blue'));

// // if(btns[1].classList.contains('red')){
// //     console.log('red');
// // }

// btns[0].addEventListener('click', () =>{
//     // if(btns[1].classList.contains('red')){
//     //     btns[1].classList.remove('red');
//     // } else{
//     //     btns[1].classList.add('red');
//     // }
//     btns[1].classList.toggle('red');
// })
// console.log(btns[0].className);


// wrapper.addEventListener('click',(e)=> {
//     // console.dir(e.target);
//     if(e.target && e.target.tagName == 'BUTTON'){
//         console.log('Hello');
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () =>{
//         console.log('Hello');
//     });
// });

// const btn=document.createElement ('button');
// btn.classList.add('red');
// wrapper.append(btn);
<<<<<<< HEAD:script.js
/*
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation(){
    const element = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame,10)

    function frame(){
        if(pos ===300){
            clearInterval(id);
        }else{
            pos++;
            element.style.top=pos+"px";
            element.style.left=pos+"px";
        }
    }
}
btn.addEventListener('click', myAnimation);

*/
=======

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation(){
//     const element = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame,10)

//     function frame(){
//         if(pos ===300){
//             clearInterval(id);
//         }else{
//             pos++;
//             element.style.top=pos+"px";
//             element.style.left=pos+"px";
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);
>>>>>>> master:js/script.js
// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     const timerId = setInterval(function () {
//         if (i === 3) {
//             clearInterval(timerId);
//         }
//         console.log('text');
//         i++;
    
//     }, 500);

// });

// let id=setTimeout(function log(){
//     console.log('hello');
//     id=setTimeout(log,500);
//     },500);


const box = document.querySelector('.box'),
btn = document.querySelector('button');


// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

btn.addEventListener('click', () =>{
    // box.style.height=box.scrollHeight + 'px';
    console.log(box.scrollTop);
});


console.log(box.getBoundingClientRect().bottom);
console.log(box.getBoundingClientRect());

console.log(width, height);

const style=window.getComputedStyle(box);
console.log(style.display);

//data

// const now = new Date('2022-02-06');
// console.log(now);

// const now = new Date(2022, 2, 6,20);
// console.log(now);

// const now = new Date(0);
// console.log(now);

// const now = new Date(-999999999999);
// console.log(now);

// const now = new Date();
// console.log(now.setHours(18, 40));
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getMilliseconds());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());

// console.log(now.getTime());


let start = new Date();

for(let i=0; i<100000; i++){
    let some= i **3;
}
let end= new Date();
alert (`Цикл отработал за ${end-start} миллисекунд`);
