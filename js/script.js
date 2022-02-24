'use strict';

// console.log('Запрос данных...');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(e => {

//         console.log('Подготовка данных...');
//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);

//     }, 2000);
// });
// req.then(product => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             // resolve(product);
//             reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;

// }).then(data => {
//     console.log(data);
// }).catch(() =>{
//     console.log('Произошла ошибка');
// }).finally(()=>{
//     console.log('finally');
// });

// const test = time =>{
//     return new Promise(resolve =>{
//         setTimeout(() =>resolve(), time);
//     }); 
// };

// test(1000).then(() =>{
//     console.log('1000 ms');
// });
// test(2000).then(() =>{
//     console.log('2000 ms');
// });

// Promise.all([test(1000),test(2000)]).then(() => {
//     console.log('All');
// })

// Promise.race([test(1000),test(2000)]).then(() => {
//     console.log('All');
// });


// методы перебора массивов
/*
//Filter


const names = ['Ivan', 'Ann', 'Ksenya', 'Voldemar'],
    shortNames=names.filter(function(name){
        return name.length <5;
    });

console.log(shortNames);

//map

let answers=['IvAn','AnnA', 'HellO'],

    result = answers.map(item => item.toLowerCase());
console.log(result);

//every/some()

const arr=[4, 'fsdfs', 'sdfsdf'],
arr1=[4, 5, '8'];

console.log(arr.some(item => typeof(item)==='number'));

console.log(arr1.every(item => typeof(item)==='number')); 
*/

// reduce

const arr = [4, 5, 1, 3, 2, 6];

const res=arr.reduce((sum, current)=> sum+current,3);
console.log(res);


// const arr = ['apple','pear','plum'];

// const res=arr.reduce((sum, current)=> `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};
const newArr=Object.entries(obj)
.filter(item => item[1]==='person')
.map(item => item[0]);
console.log(newArr);