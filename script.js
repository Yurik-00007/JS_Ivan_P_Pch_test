<<<<<<< HEAD
const person = {
	name: 'Alex',
	age: 26,

	get userAge() {
		return this.age;
	},
	set userAge(num) {
		this.age = num;
	}
};
console.log(person.userAge);
console.log(person.userAge = 30);
console.log(person.userAge);
=======
'use strict';

/*

// localStorage.setItem('number', 5);
// localStorage.removeItem('number');
// // localStorage.clear();
// console.log(localStorage.getItem('number'));


const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}
if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
            if (localStorage.getItem('isChecked')) {
                localStorage.removeItem('isChecked');
                //   localStorage.setItem('isCheced', true);
            } else {
                localStorage.setItem('isChecked', true);

            }
        });

        change.addEventListener('click', () => {
            if (localStorage.getItem('bg')) {
                localStorage.removeItem('bg');
                form.style.backgroundColor = 'white';
            } else {
                localStorage.setItem('bg', 'changed');
                form.style.backgroundColor = 'red';
            }
        });

        const persone = {
            name:'Alex',
            age: 25
        };

        const serializedPersone=JSON.stringify(persone);
        localStorage.setItem('alex', serializedPersone);

        console.log(JSON.parse(localStorage.getItem('alex')));
        
        */

// new RegExp('pattern','flags');
// /pattern/flags

// const ans = prompt('Введите ваше имя');
// const reg = / /ig;
// console.log(reg.test(ans));

// const reg = /\d/g;
// console.log(ans.match(reg).join('')+'px');

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt ('Password');

// console.log(pass.replace(/\./g, '*'));

// console.log('12-34-56'.replace(/-/g,':'));

// const str = 'My name is R2D2';
// console.log(str.match(/\D/g));

//Promise

let a = 7;

// setTimeout(() => {
//     a=99;
//     console.log(a);
// },2000);

// console.log(a);

// let b=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve(a=99);

//     },2000);
// });
// b.then(function(){
//     console.log(a);
// });

'use strict';

console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
    setTimeout(e => {

        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);

    }, 2000);
});
req.then(product => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            // reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;

}).then(data => {
    console.log(data);
}).catch(() =>{
    console.log('Произошла ошибка');
}).finally(()=>{
    console.log('finally');
});
>>>>>>> master
