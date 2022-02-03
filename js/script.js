const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src){
const script=document.createElement('script');
script.async = false;
script.src = src;
document.body.append(script);
}

loadScript('js/test.js');
loadScript('js/some.js');