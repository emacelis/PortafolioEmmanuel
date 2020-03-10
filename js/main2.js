smoothScroll.init({
        speed: 1500,
        offset: 27, 
    });
    
    /*---------------------------------
        OCULTAR Y MOSTRAR BOTON IR ARRIBA
     ----------------------------------*/
     $(function () {
        $(window).scroll(function () {
            var scrolltop = $(this).scrollTop();
            if (scrolltop >= 150) {
                $(".ir-arriba").fadeIn();
            } else {
                $(".ir-arriba").fadeOut();
            }
        });
    
    });
    /*---------------------------------
       CABECERA ANIMADA
     ----------------------------------*/
    $(window).scroll(function () {
    
        var nav = $('.encabezado');
        var scroll = $(window).scrollTop();
    
        if (scroll >= 600) {
            nav.addClass("fondo-menu");
        } else {
            nav.removeClass("fondo-menu");
        }
    });