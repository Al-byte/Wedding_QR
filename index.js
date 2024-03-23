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

    $('.pageOne').on('click', function(){
        $('.pagePrev').addClass('disabled');
        $('.pageOne').addClass('active');
        $('.pageTwo').removeClass('active');
        $('.pageThree').removeClass('active');
        //$('.pageFour').removeClass('active');
        $('#shopContainerOne').removeClass('hide');
        $('#shopContainerTwo').addClass('hide');
        $('#shopContainerThree').addClass('hide');
        //$('#shopContainerFour').addClass('hide');
        $('.pageNext').removeClass('disabled');
    });

    $('#pageNextOne').on('click', function(){
        $('.pagePrev').removeClass('disabled');
        $('.pageTwo').addClass('active');
        $('.pageOne').removeClass('active');
        $('.pageThree').removeClass('active');
        //$('.pageFour').removeClass('active');
        $('#shopContainerOne').addClass('hide');
        $('#shopContainerTwo').removeClass('hide');
        $('#shopContainerThree').addClass('hide');
        //$('#shopContainerFour').addClass('hide');
        $('.pageNext').removeClass('disabled');
        $('#paginationTwo').removeClass('hide');
    });

    $('#pagePrevTwo').on('click', function(){
        $('.pagePrev').addClass('disabled');
        $('.pageOne').addClass('active');
        $('.pageTwo').removeClass('active');
        $('.pageThree').removeClass('active');
        //$('.pageFour').removeClass('active');
        $('#shopContainerOne').removeClass('hide');
        $('#shopContainerTwo').addClass('hide');
        $('#shopContainerThree').addClass('hide');
        //$('#shopContainerFour').addClass('hide');
        $('.pageNext').removeClass('disabled');
    });

    $('#pagePrevThree').on('click', function(){
        $('.pagePrev').removeClass('disabled');
        $('.pageTwo').addClass('active');
        $('.pageOne').removeClass('active');
        $('.pageThree').removeClass('active');
        //$('.pageFour').removeClass('active');
        $('#shopContainerOne').addClass('hide');
        $('#shopContainerTwo').removeClass('hide');
        $('#shopContainerThree').addClass('hide');
        //$('#shopContainerFour').addClass('hide');
        $('.pageNext').removeClass('disabled');
        $('#paginationTwo').removeClass('hide');
    });

    $('.pageTwo').on('click', function(){
        $('.pagePrev').removeClass('disabled');
        $('.pageTwo').addClass('active');
        $('.pageOne').removeClass('active');
        $('.pageThree').removeClass('active');
        //$('.pageFour').removeClass('active');
        $('#shopContainerOne').addClass('hide');
        $('#shopContainerTwo').removeClass('hide');
        $('#shopContainerThree').addClass('hide');
        //$('#shopContainerFour').addClass('hide');
        $('.pageNext').removeClass('disabled');
        $('#paginationTwo').removeClass('hide');
    });

    $('#pageNextTwo').on('click', function(){
        $('.pagePrev').removeClass('disabled');
        $('.pageThree').addClass('active');
        $('.pageOne').removeClass('active');
        $('.pageTwo').removeClass('active');
        //$('.pageFour').removeClass('active');
        $('#shopContainerOne').addClass('hide');
        $('#shopContainerTwo').addClass('hide');
        $('#shopContainerThree').removeClass('hide');
        //$('#shopContainerFour').addClass('hide');
        $('.pageNext').removeClass('disabled');
        $('#paginationThree').removeClass('hide');
    });

    $('#pageNextThree').on('click', function(){
        $('.pagePrev').removeClass('disabled');
        //$('.pageFour').addClass('active');
        $('.pageOne').removeClass('active');
        $('.pageTwo').removeClass('active');
        $('.pageThree').removeClass('active');
        $('#shopContainerOne').addClass('hide');
        $('#shopContainerTwo').addClass('hide');
        $('#shopContainerThree').addClass('hide');
        //$('#shopContainerFour').removeClass('hide');
        $('.pageNext').addClass('disabled');
        //$('#paginationFour').removeClass('hide');
    });

    $('.pageThree').on('click', function(){
        $('.pagePrev').removeClass('disabled');
        $('.pageThree').addClass('active');
        $('.pageOne').removeClass('active');
        $('.pageTwo').removeClass('active');
        //$('.pageFour').removeClass('active');
        $('#shopContainerOne').addClass('hide');
        $('#shopContainerTwo').addClass('hide');
        $('#shopContainerThree').removeClass('hide');
        //$('#shopContainerFour').addClass('hide');
        //$('.pageNext').removeClass('disabled');
        $('#paginationThree').removeClass('hide');
        $('.pageNext').addClass('disabled');

    });

//    $('#pagePrevFour').on('click', function(){
  //      $('.pagePrev').removeClass('disabled');
    //    $('.pageThree').addClass('active');
      //  $('.pageOne').removeClass('active');
        //$('.pageTwo').removeClass('active');
        //$('.pageFour').removeClass('active');
        //$('#shopContainerOne').addClass('hide');
        //$('#shopContainerTwo').addClass('hide');
        //$('#shopContainerThree').removeClass('hide');
        //$('#shopContainerFour').addClass('hide');
        //$('.pageNext').removeClass('disabled');
        //$('#paginationThree').removeClass('hide');});

    //$('.pageFour').on('click', function(){
        //$('.pagePrev').removeClass('disabled');
        //$('.pageFour').addClass('active');
        //$('.pageOne').removeClass('active');
        //$('.pageTwo').removeClass('active');
        //$('.pageThree').removeClass('active');
        //$('#shopContainerOne').addClass('hide');
        //$('#shopContainerTwo').addClass('hide');
        //$('#shopContainerThree').addClass('hide');
        //$('#shopContainerFour').removeClass('hide');
        //$('.pageNext').addClass('disabled');
        //$('#paginationFour').removeClass('hide');});

    

    $("#hamburger").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
        $("#hamburger").toggleClass("fa-bars");
        $("#hamburger").toggleClass("fa-times");
        $(".push-wrapper").toggleClass('push');
        
      });
    $("#nav-home").click(function(){            
        $('html, body').animate({
                scrollTop: $("#body").position().top-50
            }, 1000);
            $(".push-wrapper").toggleClass('push');

    });
    $("#nav-shop").click(function(){            
        $('html, body').animate({
                scrollTop: $("#shop").position().top-100
            }, 1000);
    });
    $("#nav-gallery").click(function(){            
        $('html, body').animate({
                scrollTop: $("#gallery").position().top-80
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
                scrollTop: $("#body").position().top-50
            }, 1000);
    });
    $("side-shop").click(function(){            
        $('html, body').animate({
                scrollTop: $("#shop").position().top-50
            }, 1000);
    });

    $("side-gallery").click(function(){            
        $('html, body').animate({
                scrollTop: $("#gallery").position().top-50
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
                scrollTop: $("#body").position().top-0
            }, 1000);
    });


    
})

