  // Redireciona el ID de una pagina Otra
  
  document.addEventListener("DOMContentLoaded", function() {
    // Verificar si hay un fragmento en la URL
    if (window.location.hash) {
      // Extraer el fragmento (sin el símbolo #)
      var fragmento = window.location.hash.substring(1);
      
      // Intentar encontrar el elemento con el ID correspondiente
      var elementoDestino = document.getElementById(fragmento);
      
      // Si se encuentra el elemento, desplazarse a él
      if (elementoDestino) {
        elementoDestino.scrollIntoView();
      }
    }
  }); 



// Banner ventas Scroll
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}


function comprar() {
  alert("Lo sentímos, la opción de comprar Todavía no está Disponible 😣")
}



// Filtro
document.addEventListener("DOMContentLoaded", function() {
            const filtroItems = document.querySelectorAll('.filtro__ventas .item');
            const productos = document.querySelectorAll('.productos__ventas .producto');

            // Mostrar todos los productos al cargar la página
            productos.forEach(producto => {
                producto.classList.add('show');
            });

            filtroItems.forEach(item => {
                item.addEventListener('click', function() {
                    const filtro = this.dataset.filter;

                    productos.forEach(producto => {
                        if (filtro === 'todos' || producto.classList.contains(filtro)) {
                            producto.classList.add('show');
                        } else {
                            producto.classList.remove('show');
                        }
                    });

                    // Cambiar la clase activa al hacer clic en un filtro
                    filtroItems.forEach(item => {
                        item.classList.remove('active');
                    });
                    this.classList.add('active');
                });
            });
        });











