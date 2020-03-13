(function ($) {
    "use strict";

    // common variable
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        headTag = $('head'),
        body = $('body'),
        isMobile = windowWidth < 768;

    // Jquery Smooth Scroll
    $('.scroll_button h6 a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 2 + 'px'
        }, 1500, 'easeInOutCubic');
        event.preventDefault();
    });

    // Owl Carousel for Main Slider
    var project_slider = $('.project_slider');
    project_slider.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    $('ul.project_nav li').eq(0).on('click', function () {
        project_slider.trigger('prev.owl.carousel');
    });
    $('ul.project_nav li').eq(1).on('click', function () {
        project_slider.trigger('next.owl.carousel');
    });
    // Jquery counterUp
    $('.counter').counterUp({
        time: 3000
    });
    // Footer Map
    $(".scroll_button > p a, .footer_area .scroll_button i").on('click', function () {
        $("#footermap").toggleClass('show');
    });

    // Owl Carousel for Main Slider
    var client_slider = $('.client_slider');
    client_slider.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // Partner Slider
    var partner_slider = $('.partner_slider');
    partner_slider.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            992: {
                items: 6
            }
        }
    });

    // Partner Slider
    var clientsd = $('.clientsd');
    clientsd.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // Owl Carousel for Main Slider
    var pro_sing_slider = $('.pro_sing_slider');
    pro_sing_slider.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    $('ul.pro_sing_nav .testi_next').on('click', function () {
        pro_sing_slider.trigger('next.owl.carousel');
    });
    $('ul.pro_sing_nav .testi_prev').on('click', function () {
        pro_sing_slider.trigger('prev.owl.carousel');
    });

    // --------- Google Map init ----------  //
    var googleMapSelector = $('#map'),
        myCenter = new google.maps.LatLng(40.789886, -74.056700);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 15,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
            icon: 'img/google-pin.png'
        });
        marker.setMap(map);
    }
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }

//    $('.footer_area .scroll_button i').on('click', function () {
//        $('html, body').animate({
//            scrollTop: 0
//        }, 4000);
//        return false;
//    });

    /*====== camera slider for Home-2 ======*/
    isMobile ? windowHeight = 648 : null;
    var camWraper = $('.camera_wraper');
    if (camWraper.length) {
        camWraper.camera({
            height: windowHeight + 'px',
            pagination: false,
            autoAdvance: false,
            thumbnails: false,
            loader: false,
            playPause: false,
            fx: 'random'
        });
    }
    // mobile Menu area
    $('nav.mb_menu').meanmenu({
        meanScreenWidth: '767'
    });

    $(window).load(function(){
        $('.grid').masonry({
            // options
            itemSelector: '.grid-item'
        });
    });

})(jQuery);