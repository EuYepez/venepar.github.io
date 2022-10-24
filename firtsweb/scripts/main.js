//const mititulo = document.querySelector('h1');
//mititulo.textContent = 'Hola Mundo!'; Cambia el titulo anterior por uno que dice Hola Mundo!
let miimage = document.querySelector('img')
miimage.onclick = function(){
    let misrc = miimage.getAttribute('src');
    if (misrc === 'images/logovenepar.png'){
        miimage.setAttribute('src','images/logovenepar1.png');
    } else {
        miimage.setAttribute('src','images/logovenepar.png');
    }
}
let miboton = document.querySelector('button');
let mititulo = document.querySelector('h1');
function establecenombreusario() {
    let minombre = prompt('Por Favor, ingresa tu nombre: ');
    if (!minombre) {
        establecenombreusario ();
    } else{
    localStorage.setItem('nombre',minombre);
    mititulo.textContent = 'VENEPAR es Genial, ' + minombre;
    }
}
if (!localStorage.getItem('nombre')) {
    establecenombreusario();
} else {
    let nombrealmacenado = localStorage.getItem('nombre');
    mititulo.textContent = 'VENEPAR es genial, ' + nombrealmacenado;
}
miboton.onclick = function() {
    establecenombreusario();
}