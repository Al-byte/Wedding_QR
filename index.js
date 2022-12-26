$(document).ready(function() {    
    
    $("#work-btn").click(function(){            
        $('html, body').animate({
                scrollTop: $("#shop").position().top-50
            }, 1000);
    });
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    $('.list-group>a').on('click', function(){
        $('#wrapper').toggleClass('toggled');
        
        $('#hamburger').removeClass('fa-times');
        $('#hamburger').addClass('fa-bars');

    });
    $("#hamburger").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
        $("#hamburger").toggleClass("fa-bars");
        $("#hamburger").toggleClass("fa-times");
        $(".push-wrapper").toggleClass('push');
        
      });
    $("#nav-home").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-50
            }, 1000);
            $(".push-wrapper").toggleClass('push');

    });
    $("#nav-shop").click(function(){            
        $('html, body').animate({
                scrollTop: $("#shop").position().top-100
            }, 1000);
    });
    $("#nav-reviews").click(function(){            
        $('html, body').animate({
                scrollTop: $("#reviews").position().top-0
            }, 1000);
    });
    $("#nav-about").click(function(){            
        $('html, body').animate({
                scrollTop: $("#about").position().top-80
            }, 1000);
    });
    $("#nav-mission").click(function(){            
        $('html, body').animate({
                scrollTop: $("#mission").position().top-20
            }, 1000);
    });
    $("#nav-contact").click(function(){            
        $('html, body').animate({
                scrollTop: $("#contact").position().top-70
            }, 1000);
    });

    $("side-home").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-50
            }, 1000);
    });
    $("side-shop").click(function(){            
        $('html, body').animate({
                scrollTop: $("#shop").position().top-50
            }, 1000);
    });

    $("side-about").click(function(){            
        $('html, body').animate({
                scrollTop: $("#about").position().top-100
            }, 1000);
    });

    $("side-contact").click(function(){            
        $('html, body').animate({
                scrollTop: $("#contact").position().top-70
            }, 1000);
    });

    $("#top-icon").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-0
            }, 1000);
    });
    
})
