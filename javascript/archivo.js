
const menu = document.querySelector('.fa-solid');
const contenidoDesplegable = document.querySelector('.contenido-desplegable');
const botonCerrar          = document.querySelector('.btn-cerrar');


menu.addEventListener('click',()=>{
    contenidoDesplegable.classList.toggle('activo')
})

botonCerrar.addEventListener('click',()=>{
    contenidoDesplegable.classList.remove('activo')
})


