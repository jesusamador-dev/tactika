// /**
//  * Slider dinamico que se mueve con el scroll del mouse
//  * @param {Object} config objeto de configuración del Slider
//  * @param {HTLMElement} config.element Elemento contenedor del Slider
//  * @param {Number} config.time Tiempo para el intervalo de auto play en milisegundos
//  * @param {Number} config.imageCount Numero de imagenes que se van a mostrar
//  * @param {{id: Number, url: string,large_url: string, source_id:Number?}[]} config.images imagenes que se mostraran en el Slider
//  */
// function Slider(config) {
//     /**
//      * Elemento contenedor del Slider
//      * @name Slider#contenedor
//      * @type HTMLElement
//      */
//     this.contenedor = config.element;
//     /**
//      * Intervalo de tiempo del Slider con autoplay
//      * @name Slider#time
//      * @type Number
//      */
//     this.time = config.time;
//     /**
//      * Imagenes del Slider
//      * @name Slider#images
//      * @type [{id: Number, url: string,large_url: string, source_id:Number?}]
//      */
//     this.images = config.images;
//     /**
//      * Array del las posisiones de las imagenes en pantalla
//      * @name Slider#currentImages
//      * @type [Number]
//      */
//     this.currentImages = Array.from(Array(config.imageCount).keys());

//     if (this.images.length > 0) {
//         this._loadSlider();
//         setInterval(() => {
//             if (!this.lock) this.nextImage();
//         }, this.time);
//     }
// }
// /**
//  * Función para cargar las imagenes que se van a mostrar en pantalla
//  */
// Slider.prototype._loadSlider = function() {
//     this.imgElements = this.currentImages.forEach(index => {
//         this._loadImage(index);
//     });
// };
// /**
//  * Función para crear los elementos <img>
//  */
// Slider.prototype._loadImage = function(index, prepend) {
//     const image = this.images[index];
//     //crea el elemento de cada imagen
//     const imgEl = document.createElement("img");
//     imgEl.classList.add("w-1/3", "h-full", "object-cover");
//     imgEl.src = image.url;
//     //agrega la imagen al contenedor
//     imgEl;
//     if (prepend) {
//         this.contenedor.prepend(imgEl);
//     } else {
//         this.contenedor.appendChild(imgEl);
//     }
// };
// /**
//  * Funcion para Eliminar la imagen de la pantalla
//  */
// Slider.prototype._removeImage = function(img) {
//     this.contenedor.removeChild(img);
// };
// /**
//  * Funcion para Cargar la siguiente imagen y eliminar la primer imagen
//  */
// Slider.prototype.nextImage = function() {
//     this.lock = true;
//     //obtinene el ultimo elemento que se muestra
//     const last = this.currentImages.slice(-1).pop();
//     //calcula la siguiente imagen como la ultima +1
//     let next = last + 1;
//     //si la siguiente imagen es mayor al array de imagenes vuelve a empezar
//     if (next >= this.images.length) {
//         next = 0;
//     }
//     this.currentImages.shift();
//     this.currentImages.push(next);
//     this._loadImage(next);

//     this.contenedor.style.marginLeft = "-33.3%";
//     this.contenedor.style.marginRight = "33.3%";
//     this.contenedor.classList.add(
//         "transition-all",
//         "ease-in-out",
//         "duration-700"
//     );
//     setTimeout(() => {
//         this.contenedor.classList.remove(
//             "transition-all",
//             "ease-in-out",
//             "duration-700"
//         );
//         this.contenedor.style.marginLeft = "0";
//         this.contenedor.style.marginRight = "0";
//         const firstImg = this.contenedor.firstChild;
//         this._removeImage(firstImg);
//         this.lock = false;
//     }, 700);
// };
// /**
//  * Funcion para Cargar la imagen anterior y eliminar la ultima imagen
//  */
// Slider.prototype.prevImage = function() {
//     this.lock = true;
//     //obtinene el primer elemento que se muestra
//     const first = this.currentImages.slice(0).shift();
//     //calcula la siguiente imagen como la ultima +1
//     let prev = first - 1;
//     //si la siguiente imagen es mayor al array de imagenes vuelve a empezar
//     if (prev < 0) {
//         prev = this.images.length - 1;
//     }
//     this.contenedor.style.marginLeft = "-33.3%";
//     this.contenedor.style.marginRight = "33.3%";
//     this.currentImages.pop();
//     this.currentImages.unshift(prev);
//     this._loadImage(prev, true);

//     // logica de animacion
//     this.contenedor.classList.add(
//         "transition-all",
//         "ease-in-out",
//         "duration-700"
//     );

//     setTimeout(() => {
//         // this.contenedor.style.marginLeft = "33.3%";
//         // this.contenedor.style.marginRight = "-33.3%";
//         this.contenedor.classList.remove(
//             "transition-all",
//             "ease-in-out",
//             "duration-700"
//         );
//         // this.contenedor.style.marginLeft = "0";
//         // this.contenedor.style.marginRight = "0";
//         const lastImg = this.contenedor.lastChild;
//         this._removeImage(lastImg);
//         this.lock = false;
//     }, 700);
// };

// export default Slider;







! function(e) {
    var t = {};

    function n(i) { if (t[i]) return t[i].exports; var o = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
    n.m = e, n.c = t, n.d = function(e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) { return e[t] }.bind(null, o));
        return i
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";

    function i(e) { this.contenedor = e.element, this.time = e.time, this.images = e.images, this.currentImages = Array.from(Array(e.imageCount).keys()), this.images.length > 0 && (this._loadCarrusel(), setInterval(() => { this.lock || this.nextImage() }, this.time)) }
    n.r(t), i.prototype._loadCarrusel = function() { this.imgElements = this.currentImages.forEach(e => { this._loadImage(e) }) }, i.prototype._loadImage = function(e, t) {
        const n = this.images[e],
            i = document.createElement("img");
        i.classList.add("w-1/3", "h-full", "object-cover"), i.src = n.url, t ? this.contenedor.prepend(i) : this.contenedor.appendChild(i)
    }, i.prototype._removeImage = function(e) { this.contenedor.removeChild(e) }, i.prototype.nextImage = function() {
        this.lock = !0;
        let e = this.currentImages.slice(-1).pop() + 1;
        e >= this.images.length && (e = 0), this.currentImages.shift(), this.currentImages.push(e), this._loadImage(e), this.contenedor.style.marginLeft = "-33.3%", this.contenedor.style.marginRight = "33.3%", this.contenedor.classList.add("transition-all", "ease-in-out", "duration-700"), setTimeout(() => {
            this.contenedor.classList.remove("transition-all", "ease-in-out", "duration-700"), this.contenedor.style.marginLeft = "0", this.contenedor.style.marginRight = "0";
            const e = this.contenedor.firstChild;
            this._removeImage(e), this.lock = !1
        }, 700)
    }, i.prototype.prevImage = function() {
        this.lock = !0;
        let e = this.currentImages.slice(0).shift() - 1;
        e < 0 && (e = this.images.length - 1), this.contenedor.style.marginLeft = "-33.3%", this.contenedor.style.marginRight = "33.3%", this.currentImages.pop(), this.currentImages.unshift(e), this._loadImage(e, !0), this.contenedor.classList.add("transition-all", "ease-in-out", "duration-700"), setTimeout(() => {
            this.contenedor.classList.remove("transition-all", "ease-in-out", "duration-700");
            const e = this.contenedor.lastChild;
            this._removeImage(e), this.lock = !1
        }, 700)
    };
    var o = i;
    const r = document.getElementById("carrusel");
    !async function() {
        const e = await fetch("http://www.splashbase.co/api/v1/images/search?query=green").then(e => e.json()).then(e => e.images),
            t = new o({ element: r, time: 5e3, images: e, imageCount: 3 });
        window.addEventListener("wheel", e => {
            const n = e.deltaY > 0 ? "next" : "prev";
            switch (console.info(n), console.info(t.currentImages), n) {
                case "next":
                    t.nextImage();
                    break;
                case "prev":
                    t.prevImage()
            }
        })
    }()
}]);