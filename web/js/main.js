//  var header = document.getElementById('header');
//  var contenedor = document.getElementById('slider-container');
//  contenedor.style.height = 'calc(100vh - ' + header.offsetHeight + 'px)';


var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    center: false,
    margin: 0,
    dots: false,
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
            items: 3
        }
    }
});




var animateScroll = false;
owl.on('wheel', '.owl-stage', function(e) {
    // console.log('Ejecutando la animación: ' + animateScroll);
    var curr = $(this);
    if (!animateScroll) {
        console.log(e);
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