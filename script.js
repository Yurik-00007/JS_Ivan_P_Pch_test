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
/*
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

/*
let arr1=[2,13, 26, 8,10];
arr1.sort();
console.log(arr1);

arr1.sort(compareNum);
console.log(arr1);

function compareNum(a,b){
    return a-b;
}
*/
//передача по ссылке или по значению
/*
let a = 5,
    b = a;


    b = b + 5;

    console.log(b);
    console.log(a);

    const obj = {
        a : 5,
        b : 1
    };

    const copy = obj;
    
    copy.a = 10;

    console.log(copy);
    console.log(obj);
    */
/*
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clon=Object.assign({}, add);
clon.d=20;

console.log(add);
console.log(clon);

const oldArray = ['a', 'b', 'c'],
    newArray = oldArray.slice();
  
newArray[3]='sdvsdjslkdj';

console.log(oldArray);
console.log(newArray);
*/
/*
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'bloggers'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num=[2,5,7];

log(...num);

const array = ['a','b '];
const newAarray= [...array];

newAarray[3]='d';
console.log(array);
console.log(newAarray);

const q = {
    one :1,
    two: 2,
    three: 3
};

const newq = {...q};

newq.two = 4;
console.log(q);
console.log(newq);
*/

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

//console.dir([1, 2, 3, 4]);
/*
const solder = {
    health: 400,
    armor: 100,
    sayHello : function(){
        console.log('Hello');
    }
};

const jhon = Object.create(solder);

jhon.health =100;

//Object.setPrototypeOf(jhon,solder);


jhon.__proto__=solder;


console.log(jhon);
console.log(jhon.armor);
jhon.sayHello();
*/
/*
function hello() {
    console.log('Hello World');
}
hello();

function hi() {
    console.log('Say hi!');
}
hi();

const arr = [1, 14, 4, 30, 54],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted);
*/
/*
//динамическая типизация

//to string

//1
console.log(typeof(String(null)));
console.log(String(null));
console.log(typeof(String(4)));

//2
console.log(typeof(4 + ''));

const num=5;

console.log('https://vk.com/catalog/'+num);

//to number

//1
console.log(typeof(Number('4')));
//2
console.log(typeof(+'5'));
//3
console.log(typeof(parseInt('15px',10)));
console.log(parseInt('15px',10));

// to boolean
//1
let switcher=null;
if(switcher){
    console.log('Working ...');
}else{
    console.log('Not Working ...');
}
 switcher=1;
if(switcher){
    console.log('Working ...');
}else{
    console.log('Not Working ...');
}
//2
console.log(typeof(Boolean(null)));
console.log(Boolean('null'));
*/
//задачи
/*
•	Какое будет выведено значение: let x = 5; alert( x++ ); ? 5

•	Чему равно такое выражение: [ ] + false - null + true ?NaN

•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?2

•	Чему равна сумма [ ] + 1 + 2?12

•	Что выведет этот код: alert( "1"[0] )?1

•	Чемуравно 2 && 1 && null && 0 &&undefined ?null

•	Есть ли разница между выражениями? !!( a&& b ) и (a && b)?да

•	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?3

•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?нет

•	Что выведет этот код: alert( +"Infinity" ); ?Infinity

•	Верно ли сравнение: "Ёжик" > "яблоко"?нет

•	Чему равно 0 || "" || 2 || undefined || true || falsе ?2
*/
//Какое будет выведено значение: let x = 5; alert( x++ ); ? 5
let x = 5; console.log( x++ );//5
//•	Чему равно такое выражение: [ ] + false - null + true ?NaN
console.log([ ] + false - null + true);//NaN - числовой тип данных который относится к примитивам Not a Number не число
//•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?2
let y = 1; let z=y=2;  console.log(z);//x=y; y=2
//•	Чему равна сумма [ ] + 1 + 2?12
console.log([ ] + 1 + 2);