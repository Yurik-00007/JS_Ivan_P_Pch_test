'use strict';
const inputRub= document.querySelector('#rub'),
    inputUsd= document.querySelector('#usd');

    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();// экземпляр

        request.open('GET','js1/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        request.send();

        // request.addEventListener('readystatechange', () =>{
        //     if(request.readyState === 4 && request.status ===200){
        //         console.log(request.response);
        //         const data =JSON.parse(request.response);
        //         inputUsd.value = (+inputRub.value/data.current.usd).toFixed(2);
        //     } else {
        //         inputUsd.value = 'Что-то пошло не так';
        //     }
        // });

        request.addEventListener('load', () =>{
            if(request.status ===200){
                const data =JSON.parse(request.response);
                inputUsd.value = (+inputRub.value/data.current.usd).toFixed(2);
            } else {
                inputUsd.value = 'Что-то пошло не так';
            }
        });
    });