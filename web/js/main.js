var tamImagen = screen.width / 3;
var scrollAnterior = 0;
var scrollActual;
var sliderContainer = document.getElementById('slider-container');
var contenedorPrincipal = document.getElementById('contenedorPrincipal');
var totalDeImagenes = document.getElementsByClassName('imgBox');
var totalDelScroll = tamImagen * totalDeImagenes.length;
var imagenPorHeight = sliderContainer.clientHeight / tamImagen;
contenedorPrincipal.style.height = ((totalDeImagenes.length - imagenPorHeight) * tamImagen) + 'px'; // sacamos el tamaño del conenedor principal


var contadorSlide = 0;

var tamScroll = Math.round(contenedorPrincipal.scrollHeight - (tamImagen * imagenPorHeight));



var ticking = false;

function doSomething() {
    ticking = false;

    scrollActual = window.scrollY || window.pageYOffset;
    if (scrollActual > scrollAnterior) {
        if (contadorSlide >= -tamScroll) {
            console.log("Me encuentro avanzando en la posicion: " + contadorSlide);

            contadorSlide = Math.round(contadorSlide - tamImagen);
            sliderContainer.style.transform = "translateX(" + contadorSlide + "px)";
        }
    }
    if (scrollActual < scrollAnterior) {
        console.log("Me encuentro retrocediendo en la posicion: " + contadorSlide);
        if (contadorSlide < 0) {
            contadorSlide = Math.round(contadorSlide + tamImagen);
            sliderContainer.style.transform = "translateX(" + contadorSlide + "px)";
        }
    }

    if (contadorSlide > tamScroll) {
        sliderContainer.style.transform = "translateX(" + 0 + "px)";
    }
    scrollAnterior = scrollActual;
}


document.addEventListener("scroll", (e) => {

    console.log(e);
    // console.log(ticking);
    if (!ticking) {
        setTimeout(() => {
            doSomething();
            console.log("Se mandó a hacer la animación");
        }, 600);
    }
    ticking = true;
}, false);