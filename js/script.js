'use strict';
//028
/*
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');//[1];
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const heart = document.querySelectorAll('.heart');
console.log (heart);

heart.forEach(function(item){
    console.log(item);
});

heart.forEach(item => {
    console.log(item);
});

*/
//029


const box = document.getElementById('box'),
 btns = document.getElementsByTagName('button'),
 circles = document.getElementsByClassName('circle'),
 wrapper = document.querySelector('.wrapper'),
 heart = wrapper.querySelectorAll('.heart'),
 oneHeart = wrapper.querySelector('.heart');


console.dir(box);

box.style.backgroundColor = 'pink';
box.style.width = '500px';

btns[1].style.borderRadius='100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText='background-color:blue; width:300px';
for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor='yellow';    
}

heart.forEach( item => {
    item.style.backgroundColor= 'pink';
});

const div = document.createElement('div');
//const text = document.createTextNode('Здесь был я ');
div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// circles[1].before(div);
// heart[0].after(div);

// wrapper.insertBefore(div,heart[1]);

// circles[0].remove();
// wrapper.removeChild(heart[1]);

 heart[0].replaceWith(circles[0]);
// wrapper.replaceChildren(circles[0],heart[0]);

// div.innerHTML='Hello World';
 div.innerHTML='<h1>Hello World</h1>';

// div.textContent='hello'; 
// div.insertAdjacentHTML('beforebegin','<h2>hello</h2>');
// div.insertAdjacentHTML('afterbegin','<h2>hello</h2>');
// div.insertAdjacentHTML('beforeend','<h2>hello</h2>');
div.insertAdjacentHTML('afterend','<h2>hello</h2>');