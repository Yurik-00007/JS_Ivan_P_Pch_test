const btn = document.querySelectorAll('button');
console.log(btn);
btn[1].onclick = function(){
    alert('Click');
}; 

btn[1].onclick = function(){
    alert('Second Click');
}; 

btn[2].removeEventListener