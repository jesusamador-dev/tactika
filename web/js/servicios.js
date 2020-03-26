var header = document.getElementById('header');
var banners = document.getElementsByClassName('banner');
for (let index = 0; index < banners.length; index++) {
    banners[index].style.height = 'calc(100vh - ' + header.offsetHeight + 'px)';
}


function animateCSS(element, animationName, callback) {

    element.classList.add('animated', animationName)

    function handleAnimationEnd() {
        element.classList.remove('animated', animationName)
        element.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    element.addEventListener('animationend', handleAnimationEnd)
}

var itemsIdentidad = document.getElementsByClassName('item-identidad');
var topIdentidad = document.getElementById('topIdentidad');
var identidadVisual = document.getElementById('identidadVisual');
var bottomIdentidad = document.getElementById('bottomIdentidad');
var animateIcons = document.getElementsByClassName('animateIcon');

function animarItemsIdentidad() {
    animateCSS(topIdentidad, 'zoomInDown');
    animateCSS(identidadVisual, 'zoomIn');
    animateCSS(bottomIdentidad, 'zoomInUp');
    for (let i = 0; i < animateIcons.length; i++) {
        animateCSS(animateIcons[i], 'jackInTheBox');
    }
    animateCSS(itemsIdentidad[0], 'bounceInDown');
    animateCSS(itemsIdentidad[1], 'bounceInUp');
    animateCSS(itemsIdentidad[2], 'bounceInRight');
    animateCSS(itemsIdentidad[3], 'bounceInUp');
    animateCSS(itemsIdentidad[4], 'bounceInUp');
    animateCSS(itemsIdentidad[5], 'bounceInUp');
    animateCSS(itemsIdentidad[6], 'bounceInDown');
    animateCSS(itemsIdentidad[7], 'bounceInUp');
    animateCSS(itemsIdentidad[8], 'bounceInLeft');
}

animarItemsIdentidad();

var itemsWeb = document.getElementsByClassName('item-web');
var topWeb = document.getElementById('topWeb');
var tituloWeb = document.getElementById('paginasWeb');
var bottomWeb = document.getElementById('bottomWeb');
var iconsWeb = document.getElementsByClassName('iconWeb');

function animarItemsWeb() {
    animateCSS(topWeb, 'zoomInDown');
    animateCSS(tituloWeb, 'zoomIn');
    animateCSS(bottomWeb, 'zoomInUp');
    for (let i = 0; i < iconsWeb.length; i++) {
        animateCSS(iconsWeb[i], 'jackInTheBox');
    }
    animateCSS(itemsWeb[0], 'bounceInDown');
    animateCSS(itemsWeb[1], 'bounceInRight');
    animateCSS(itemsWeb[2], 'bounceInUp');
    animateCSS(itemsWeb[3], 'bounceInDown');
    animateCSS(itemsWeb[4], 'bounceInLeft');
    animateCSS(itemsWeb[5], 'bounceInUp');
}

var itemsRedes = document.getElementsByClassName('item-redes');
var topRedes = document.getElementById('topRedes');
var tituloRedes = document.getElementById('redesSociales');
var bottomRedes = document.getElementById('bottomRedes');
var iconsRedes = document.getElementsByClassName('iconRedes');

function animarItemsRedes() {
    animateCSS(topRedes, 'zoomInDown');
    animateCSS(tituloRedes, 'zoomIn');
    animateCSS(bottomRedes, 'zoomInUp');
    for (let i = 0; i < iconsRedes.length; i++) {
        animateCSS(iconsRedes[i], 'jackInTheBox');
    }
    animateCSS(itemsRedes[0], 'bounceInDown');
    animateCSS(itemsRedes[1], 'bounceInUp');
    animateCSS(itemsRedes[2], 'bounceInUp');
    animateCSS(itemsRedes[3], 'bounceInDown');
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    center: true,
    margin: 0,
    dotsSpeed: 900,
    autoplay: false,
    smartSpeed: 900,
    navSpeed: 900,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

owl.on('changed.owl.carousel', function(event) {
    var currentItem = event.item.index;
    if (currentItem == 0) {
        animarItemsIdentidad();
    }
    if (currentItem == 1) {
        animarItemsWeb();
    }
    if (currentItem == 2) {
        animarItemsRedes();
    }
});

var animateScroll = false;
owl.on('wheel', '.owl-stage', function(e) {
    // console.log('Ejecutando la animación: ' + animateScroll);
    var curr = $(this);
    if (!animateScroll) {
        // console.log(e);
        if (e.originalEvent.deltaY > 0) {
            setTimeout(() => {
                curr.trigger('next.owl', [900]);
                animateScroll = false;
                // console.log("Terminando de avanzar: " + animateScroll);
            }, 100);
            animateScroll = true;

        } else {
            setTimeout(() => {
                curr.trigger('prev.owl', [900]);
                animateScroll = false;
                // console.log("Terminando de retroceder: " + animateScroll);
            });

            animateScroll = true;

        }
    }
    animateScroll = true;
    e.preventDefault();
});