/*---------------------------------
   SWIPER IMAGENES INDEX
 ----------------------------------*/
var modernSlider = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 100,
    centeredSlides: true,
    mousewheel: true,
});

modernSlider.on('slideChange', function () {
    TweenMax.to('.reveal', .2, {
        y: '-50px',
    })
    TweenMax.to('.swiper-slide', .5, {
        scale: .95,
    })
});


modernSlider.on('slideChangeTransitionEnd', function () {
    TweenMax.to('.reveal', 0, {
        y: '50px',
    })
    TweenMax.to('.reveal', .2, {
        y: 0,
        delay: .5,
    })
    TweenMax.to('.swiper-slide-active .port-text', 0, {
        autoAlpha: 1,
    })
    TweenMax.to('.swiper-slide-next .port-text', 0, {
        autoAlpha: 0,
    })

    TweenMax.to('.swiper-slide-prev .port-text', 0, {
        autoAlpha: 0,
    })
    TweenMax.to('.swiper-slide-active', .5, {
        scale: 1,
        ease: Power4.easeOut,
    })
});

TweenMax.to('.swiper-slide-next .port-text', 0, {
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-prev .port-text', 0, {
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
})

TweenMax.to('.swiper-slide', 0, {
    scale: .95,
})
/*---------------------
----ANIMACION INICIO
----------------------*/
const conte = document.querySelector(".contenido");
const full = document.querySelector(".full-page");
const box = document.querySelector(".box");
const number = document.querySelector(".number");
const bloque = document.querySelector(".bloque");
const slide = document.querySelector(".slider");
const slide2 = document.querySelector(".slider2");
const slide3 = document.querySelector(".slider3");
const slide4 = document.querySelector(".slider4");
const cell = document.querySelector(".cell");

const tl = new TimelineMax();

tl.fromTo(slide3, 2.5, {
        opacity: 1,
    }, {
        opacity: 0,
        ease: Power2.easeInOut
    })
    .fromTo(slide4, 1.5, {
        opacity: 1,
    }, {
        opacity: 0,
        ease: Power2.easeInOut
    }, "=-2.5")

    .fromTo(slide, 1.2, {
        x: "0%",
        opacity: 1,
        height: "0%",
    }, {
        x: "-150%",
        opacity: 0,
        height: "100%",
        ease: Power2.easeInOut
    }, "=-1")
    .fromTo(slide2, 1.5, {
        y: "100%",
        width: "0%",
    }, {
        y: "-150%",
        width: "100%",
        ease: Power2.easeInOut
    })
    .fromTo(conte, 1.5, {
        opacity: 0,
        width: "900%",
    }, {
        opacity: 1,
        width: "100%",
        ease: Power2.easeInOut
    }, "=-1")
    .fromTo(box, 1.5, {
        opacity: 0,
    }, {
        opacity: 1,
        ease: Power2.easeInOut
    }, "=-.5")
    .fromTo(number, 1, {
        opacity: 0,
        x: "-50%",
    }, {
        opacity: 1,
        x: "0%",
        ease: Power2.easeInOut
    }, "=-.5")
    .fromTo(bloque, 1, {
        opacity: 0,
    }, {
        opacity: 1,
        ease: Power2.easeInOut
    }, "=-.5")
    .fromTo(cell, 2, {
        opacity:0,
    }, {
        opacity:1,
        ease: Power2.easeInOut
    },"=-1");

/*ANIMACION FIN*/
const acerca1 = document.getElementById('acerca1').addEventListener('click', function () {

    tl.fromTo(conte, 2, {
            opacity: 1,
            width: "100%",
        }, {
            opacity: 0,
            width: "900%",
            ease: Power2.easeInOut
        })
        .fromTo(box, 1.5, {
            opacity: 1,
        }, {
            opacity: 0,
            ease: Power2.easeInOut
        }, "=-1.9")
        .fromTo(number, 1, {
            opacity: 1,
        }, {
            opacity: 0,
            ease: Power2.easeInOut
        }, "=-1.9")
        .fromTo(bloque, 1, {
            opacity: 1,
        }, {
            opacity: 0,
            ease: Power2.easeInOut
        }, "=-1.9");
});