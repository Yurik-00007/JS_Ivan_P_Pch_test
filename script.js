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
        
        const str = 'My name is R2D2';
        console.log(str.match(/\D/g));