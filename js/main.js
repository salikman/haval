"use strict";

(function($) {
    $('.burger').click(() => {
        $('.burger').toggleClass('burger--active');
        $('#nav').toggleClass('menu-open');
    });
    ///////////////////////////
    // Mobile dropdown
    $('.has-dropdown > a').on('click', function(e) {
        e.preventDefault()
        $(this).parent().toggleClass('open-drop');
    });

    ///////////////////////////
    // Smooth scroll
    $(".auto__options li a[href^='#']").on('click resize', function(e) {
        e.preventDefault();
        let hash = this.hash;
        let padding;

        $(window).width() <= 768 ? padding = 130 : padding = 0;

        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - padding
        }, 600);
    });

    ///////////////////////////
    // Tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    ///////////////////////////
    // Tabs
    $('.options-toggle').click(() => {
        $('.auto-header').toggleClass('options-open')
    })

    ////////////////////////////
    // Swiper
    new Swiper(".primary-slider", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".primary-slider-next",
            prevEl: ".primary-slider-prev",
        },
    });
    //

    let appearanceFull = '.appearance-full',
        appearanceThumb = '.appearance-thumb',
        interiorFull = '.interior-full',
        interiorThumb = '.interior-thumb';

    function autoSlider(a, b) {
        let autoSliderThumb = new Swiper(b, {
            spaceBetween: 10,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                481: {
                    slidesPerView: 3,
                },
                769: {
                    slidesPerView: 4,
                },
            },
        });
        new Swiper(a, {
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: autoSliderThumb,
            },
        });
    }
    autoSlider(appearanceFull, appearanceThumb);
    autoSlider(interiorFull, interiorThumb);
    ////////////////////////////
    // Owl.Carousel
    $('.news-owl').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0: {
                items:1
            },
            481:{
                items:2
            },
            769:{
                items:3
            },
            1025:{
                dots:false,
                items:4
            }
        }
    })
    ////////////////////////////

})(jQuery)
