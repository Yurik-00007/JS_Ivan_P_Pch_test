const btn = document.querySelectorAll('button'),
    overlay= document.querySelector('.overlay'),
    btns =document.querySelectorAll('button');
console.log(btn);
console.log(overlay);


btn[1].onclick = function(){
    alert('Click');
}; 

btn[1].onclick = function(){
    alert('Second Click');
}; 

// btn[2].addEventListener( 'mouseenter', (e)=>{
//     console.log(e.target);
//     e.target.remove();
    //console.log('Hover');
// });
// btn[2].addEventListener( 'click', ()=>{
//     alert('Second click');
// });
// let i=0;
const deleteElement=(e)=>{
    console.log(e.currentTarget);
    console.log(e.type);
// console.log(i++);
// if(i===1){
//     btn[2].removeEventListener( 'click', deleteElement);
// }
};

btn[2].addEventListener( 'click', deleteElement);
overlay.addEventListener( 'click', deleteElement);
// btn[2].removeEventListener( 'click', deleteElement);

const link = document.querySelector('a');
console.log(link);

link.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e.target);
});

btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once:true});
});
    

