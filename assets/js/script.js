$(document).ready(function () {

    // Testimonials Slider
    $(".testimonials").slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1240,
            settings: {
                slidesToShow: 2,
                infinite: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    // Sticky Header
    $window = $(window);
    $window.scroll(function () {
        $scroll_position = $window.scrollTop();
        if ($scroll_position > 300) { // if body is scrolled down by 300 pixels
            $('.main-nav').addClass('sticky');

            // To get rid of jerk
            header_height = $('.main-nav').innerHeight();
            $('body').css('padding-top', header_height);
            $('.backtotop').css('display', 'block');
        } else {
            $('body').css('padding-top', '0');
            $('.backtotop').css('display', 'none');
            $('.main-nav').removeClass('sticky');
        }
    });

    // Fancy Box
    Fancybox.bind('.one-project-item img', {
        groupAll: true,
        compact: true,
        wheel: false,
        contentDblClick: false,
        backdropClick: "close",
        contentClick: "next",
        Images: {
            zoom: false,
        },
        Thumbs: false,
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"],
            },
        },
    });

    //Clients Slider 
    $(".clients-slider").slick({
        infinite: true,
        slidesToShow: 6,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        autoplaySpeed: 3000,
        draggable: false,
        speed: 1200,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }]
    });


    // Wow Js
    new WOW().init();


    // Counter Animation
    let counted = 0;
    if ($('.stats').length !== 0) {
        $(window).scroll(function () {
            let oTop = $('.stats').offset().top - window.innerHeight;
            if (counted == 0 && $(window).scrollTop() > oTop) {
                $('.counter').each(function () {
                    let $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }
                        });
                });
                counted = 1;
            }
        });
    }


    // Progress Bar Animation 
    let progresed = 0;
    if ($('.progress-bar').length !== 0) {
        $(window).scroll(function () {
            let oTop = $('.progress-bars').offset().top - window.innerHeight;
            if (progresed == 0 && $(window).scrollTop() > oTop) {
                $('.progress-bar').each(function () {
                    let $this = $(this),
                        widthTo = $this.attr('data-width');
                    $(this).animate({
                        width: widthTo +'%'
                    }, 1000);
                });
                progresed = 1;
            }
        });
    }


});