
const menu                  = document.querySelector('.btn-menu');
const botonCerrar           = document.querySelector('.btn-cerrar');
const contenedorImagenes    = document.querySelector('.grande');
const menuDesplegable       = document.querySelector('.nav');
const botonUp               = document.querySelector('.btn-up');
const carrousel             = document.querySelector('.carrousel');
const titulo                = document.querySelector('.prueba-titulo');
const seccionCatalogo       = document.querySelector('.seccion-dos-catalogo');
const footer                = document.querySelector('.footer');




let vigia = false
botonUp.addEventListener('click',()=>{
    carrousel.classList.toggle('up');
    vigia = true
    seccionCatalogo.classList.toggle('display-none');
    footer.classList.toggle('display-none');
    
    
})

menu.addEventListener('click',()=>{
    menuDesplegable.classList.toggle('activo');
    menu.classList.toggle('none');
    botonCerrar.classList.toggle('block');
    
})


botonCerrar.addEventListener('click',()=>{
    menuDesplegable.classList.remove('activo');
    botonCerrar.classList.remove('block');
    menu.classList.toggle('none');
   
  
})

let intervaloId;
let index = 1;
let cantidadDeImagenes = document.querySelectorAll('.img');

intervaloId = setInterval(function () {
    let porcentaje = index * -33.3;
    contenedorImagenes.style.transform = "translateX("+ porcentaje +"%)";
    index++;

    if(cantidadDeImagenes.length == index){
        index = 0
    }else if(vigia == true){
        clearInterval(intervaloId)
    }
},9000)







