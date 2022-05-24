//scrip nav sticky

$(document).ready(function(){
    
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('.barra-navegacion').addClass("sticky");
        }
        else
        {
            $('.barra-navegacion').removeClass("sticky");
        }
        if(this.scrollY > 500)
        {
            $('.scroll-up-boton').addClass("show");
        }
        else
        {
            $('.scroll-up-boton').removeClass("show");
        }
    });

    // script scroll subir
    $('.scroll-up-boton').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //Toogle menu/barra-navegacion
    $('.menu-boton').click(function(){
        $('.barra-navegacion .menu').toggleClass("active");
        $('.menu-boton i').toggleClass("active");

        window.onscroll = () => 
        {
            $('.barra-navegacion .menu').removeClass("active");
            $('.menu-boton i').removeClass("active");
        }
    });


    // script animacion typing

    var typed = new Typed(".typing", {
        strings: ["QA Tester", "Téc. Informático", "Desarrollador"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // script animacion typing

    var typed = new Typed(".typing-2", {
        strings: ["QA Tester", "Téc. Informático", "Desarrollador"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // script owl carousel

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:
        {
            0:
            {
                items: 1,
                nav: false
            },
            600:
            {
                items: 2,
                nav: false
            },
            1000:
            {
                items: 3,
                nav: false
            }
        }
    });


});

/*
function validarEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }
*/


function formulario_envia()
{
    if(document.formulario.nombre.value.length == 0)
    {
        alert("Ingrese su nombre");
        document.formulario.nombre.focus() //foco en el campo del error
        return 0;
    }

    if(document.formulario.email.value.length == 0)
    {
        alert("Ingrese un email");
        document.formulario.email.focus() //foco en el campo del error
        validarEmail(email);
        return 0;
    }
    
    if(document.formulario.asunto.value.length == 0)
    {
        alert("Ingrese un asunto");
        document.formulario.asunto.focus() //foco en el campo del error
        return 0;
    }

    if(document.formulario.mensaje.value.length == 0)
    {
        alert("Ingrese un mensaje");
        document.formulario.mensaje.focus() //foco en el campo del error
        return 0;
    }

    //el formulario se envia
    alert("¡Muchas gracias por enviar el formulario!");
    document.formulario.submit();

}


//Animacion Loader 
setTimeout(function(){
    $('.loader-fondo').fadeToggle();
}, 3000);


//Animacion Scroll Reveal
const sr = ScrollReveal({
    distance: '90px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-contenido', {origin: 'top', delay: 600})
sr.reveal('.sobremi-contenido', {origin: 'top', delay: 600})
sr.reveal('.servicios-contenido', {origin: 'top', delay: 600})
sr.reveal('.contacto-contenido', {origin: 'top', delay: 600})


