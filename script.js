"use strict";

/*
console.log('arr'+'- object');
console.log(4+ '- object');
console.log(4+ +'5');

let incr = 10,
    decr = 10;

    // incr++;
    // decr--;

    // ++incr;
    // --decr;

    // console.log(incr++ +' '+ decr--);
    console.log(++incr +' '+ --decr);

    console.log(5%2);
    // console.log (2*4 == 8);
    console.log(2 * 4 === '8');

    let isChecked = true;
    isClosed = false;

    console.log(isChecked && isChecked);
    */

// if (4 == 4){
//     console.log('Ok!');
// }else {
//     console.log('Error');
// }

// const num = 50;
// if (num < 49){
//     console.log('Error');
// } else if(num>100){
//     console.log('меньше');
// }else{
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('Error');
/*
    const num = 50;

    switch(num){
        case(49) : 
        console.log('Неверно');
        break;
        case(100) : 
        console.log('Неверно');
        break;
        case(51) : 
        console.log('В точку!');
        break;
        default : 
        console.log('Не в этот раз');
        break;
    }
*/

// let num = 50;

// while (num<=55){
//     console.log(num);
//     num++;
// }

/*
let num = 50;
do{
    console.log(num);
    num++;
}

while(num<=55);
*/
/*
let num=50;
for(let i = 1;i<=8;i++){
    console.log(num);
    num++;
}
*/

/*
let num=50;

for(let i = 1;i<=10;i++){
    if(i===6){
        // break;
        continue;
    }

    console.log(i);
}
*/
/*
let num = 50;
while (num<=55){
    console.log(num);
    num++;

}
*/

/*
let num=20;
function ShowFirstMessage (text){
    console.log(text);
    let num=10;
}

ShowFirstMessage('Hellow world!');
console.log(num);
*/


/*
console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));

function calc(a,b){
    return(a+b);
    console.log('dsdfas');
}
console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));
*/

/*
let num = 50;

function ret (){
    let num = 20;
    return num;
}
num = ret();
console.log(num);
*/

/*
const logger= function(){
    console.log('Hello');
};
logger();

*/
/*
const calc = (a,b) => {return (a+b);};
console.log(calc(3,4));

const calc1= function(a,b) {
    return (a+b);
};
console.log(calc(3,4));
*/
/*

const str="test",
arr = [1,3,5];
console.log(str.length);
console.log(arr.length);
*/

// console.log (str[2]='d');
// console.log(str);

/*
const str="test";

let a=str.toUpperCase();
a=str.toLowerCase();
console.log (a);
console.log(str);
*/

/*
const fruit="Some fruits";

console.log(fruit.indexOf('q'));
console.log(fruit.indexOf('fruits'));

const logg='Hello World';
console.log(logg.indexOf('d'));
console.log(logg.slice(6,11));
console.log(logg.slice(2));
console.log(logg.substring(0,5));
console.log(logg.substr(0,10));

const num=12.2;
console.log(Math.round(num));
const test='12.2px';
let a;
console.log(typeof(test));
console.log(a=parseInt(test));
console.log(typeof(a));
*/
/*
function first(){
    // do something
    setTimeout(function(){
        console.log(1);
    })
}

function second(){
    console.log(2);
}

// first();
// second();

function learnJS (lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function done(){
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);
*/

// 020
/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function (){
        console.log('Test');
    }
};

const {border,bg} = options.colors;
console.log(bg);

options.makeTest();

console.log(options.height);
console.log(options.colors.bg);

// delete options.name;
// console.log(options);

let counter=0;
for (let key in options) {
    /*
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${key} имеет обект со свойством ${i} значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    */
/*
   counter++;
}
console.log(counter);

console.log(Object.keys(options));
console.log(Object.keys(options).length);
*/

//021
/*
const arr = [1, 2, 3, 6, 8];
arr.pop();
console.log(arr);
arr.push(10);
console.log(arr);

for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let value of arr){
    console.log(value);
}
*/
const arr = [1, 2, 3, 6, 8];
//arr[99]=0;
//console.log(arr.length);
/*
arr.unshift(0);

console.log(arr.length);
arr.forEach(function(item,i,arr){
    console.log(`Индекс ${i}: ${item} значение внутри массива ${arr}`);
});
arr.shift();
console.log(arr);
*/
/*
let a= 'Hello world!',
b=a.split(),
c;
console.log(typeof(b));
console.log(b[0]);

c=arr.join();
console.log(typeof(c));
console.log(c[0]);
*/
/*
delete arr[2];
console.log(arr);
*/
/*
arr.splice(0,2,10,20);
console.log(arr);

const str = prompt('','');
const products= str.split(", ");
products.sort();
console.log (products.join("; "));
*/


let arr1=[2,13, 26, 8,10];
arr1.sort();
console.log(arr1);

arr1.sort(compareNum);
console.log(arr1);

function compareNum(a,b){
    return a-b;
}
