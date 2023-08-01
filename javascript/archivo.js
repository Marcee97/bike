
const menu                 = document.querySelector('.btn-menu');
const botonCerrar          = document.querySelector('.btn-cerrar');
const contenedorImagenes   = document.querySelector('.grande');
const menuDesplegable      = document.querySelector('.nav');
const titulo               = document.querySelector('.titulo');
const menuVisible          = document.querySelector('.menu-visible');


menu.addEventListener('click',()=>{
    menuDesplegable.classList.toggle('activo');
    titulo.classList.toggle('none');
    menu.classList.toggle('none');
    botonCerrar.classList.toggle('block');
    menuVisible.classList.toggle('animacion')


})


botonCerrar.addEventListener('click',()=>{
    menuDesplegable.classList.remove('activo');
    botonCerrar.classList.remove('block');
    titulo.classList.toggle('none');
    menu.classList.toggle('none');
    menuVisible.classList.toggle('animacion')
})


    
    


let index = 1;
let cantidadDeImagenes = document.querySelectorAll('.img');

setInterval(function () {
    let porcentaje = index * -33.3;
    contenedorImagenes.style.transform = "translateX("+ porcentaje +"%)";
    index++;

    if(cantidadDeImagenes.length == index){
        index = 0
    }
},9000)






// function desplazar() {
//   contenedorImagenes.style.transform = 'translateX(-33.3%)';
  
//   cantidadRepeticiones--;
  
//   if (cantidadRepeticiones > 0) {
//     // Si quedan repeticiones, llamar a setTimeout para repetir el desplazamiento
//     setTimeout(desplazar, 3000);
//   }
// }

// // Iniciar el desplazamiento
// desplazar();




