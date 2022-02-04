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
const btns =  document.querySelectorAll('button'),
wrapper=document.querySelector('.btn-block');
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

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        console.log('Hello');
    });
});

const btn=document.createElement ('button');
btn.classList.add('red');
wrapper.append(btn);