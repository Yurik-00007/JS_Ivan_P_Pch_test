'use strict';
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