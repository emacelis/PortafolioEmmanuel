const encabezado = document.querySelector(".encabezado");
const social = document.querySelector(".social-media");
const portafolio = document.querySelector(".portafolio");
const lema = document.querySelector(".lema");
const lineas = document.querySelector(".lineas");
const flecha = document.querySelector(".flecha-bajar");
const background = document.querySelector(".background");


const tl = new TimelineMax();
tl.fromTo(encabezado, 1.5, {
    x: "-100%",
}, {
     x: "0%",
    ease: Power2.easeInOut
})
.fromTo(social, 1, {
    opacity:0,
    x: "-170%",
}, {
    opacity:1,
     x: "0%",
    ease: Power2.easeInOut
},"=-.5")
.fromTo(portafolio, 2, {
    opacity:0,
    x: "170%",
}, {
    opacity:1,
     x: "0%",
    ease: Power2.easeInOut
},"=-1")
.fromTo(lema, 2, {
    opacity:0,
    x: "170%",
}, {
    opacity:1,
     x: "0%",
    ease: Power2.easeInOut
},"=-1.7")
.fromTo(lineas, 3, {
    opacity:0,
}, {
    opacity:1,
    ease: Power2.easeInOut
},"=-1.7")
.fromTo(flecha, 2, {
    opacity:0,
}, {
    opacity:1,
    ease: Power2.easeInOut
},"=-2")
.fromTo(background, 2, {
    opacity:.5,
}, {
    opacity:1,
    ease: Power2.easeInOut
},"=-2");
/*------------ANIMACION DE SALIDA--------------------------------*/
const inicio1 = document.getElementById('inicio1').addEventListener('click', function () {
    tl.fromTo(encabezado, .5, {
        x: "0%",
    }, {
         x: "-100%",
        ease: Power2.easeInOut
    }) 
.fromTo(social, .7, {
    opacity:1,
}, {
    opacity:0,
    
    ease: Power2.easeInOut
},"=-.5")
.fromTo(portafolio, 1, {
    opacity:1,
    x: "0%",
}, {
    opacity:0,
     x: "170%",
    ease: Power2.easeInOut
},"=-1")
.fromTo(lema, 1.2, {
    opacity:1,
    x: "0%",
}, {
    opacity:0,
     x: "170%",
    ease: Power2.easeInOut
},"=-.7")
.fromTo(lineas, 1, {
    opacity:1,
}, {
    opacity:0,
    ease: Power2.easeInOut
},"=-.7")
.fromTo(flecha,1, {
    opacity:1,
}, {
    opacity:0,
   
    ease: Power2.easeInOut
},"=-2")
.fromTo(background,1, {
    opacity:1,
}, {
    opacity:0,
    ease: Power2.easeInOut
},"=-3");
});

const juego1 = document.getElementById('juego1').addEventListener('click', function () {
    tl.fromTo(juego1, .5, {
        y: "0%",
    }, {
         x: "-100%",
        ease: Power2.easeInOut
    }) 
});