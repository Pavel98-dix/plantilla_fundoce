(function() {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }
        /**
         * Easy event listener function
         */
    const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all)
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                    selectEl.addEventListener(type, listener)
                }
            }
        }
        /**
         * Easy on scroll event listener 
         */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }



    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)


    let heroCarouselIndicators = select("#hero-carousel-indicators")
    let heroCarouselItems = select('#heroCarousel .carousel-item', true)

    heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
            heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
    });
    /* Carousel instalaciones */
    let heroCarouselIndicatorsInstalacion = select("#hero-carousel-indicators-instalacion")
    let heroCarouselItemsInstalacion = select('#heroCarouselInstalacion .carousel-item-instalacion', true)

    (index === 0) ?
    heroCarouselIndicatorsInstalacion.innerHTML += "<li data-bs-target='#heroCarouselInstalacion' data-bs-slide-to='" + index + "' class='active'></li>":
        heroCarouselIndicatorsInstalacion.innerHTML += "<li data-bs-target='#heroCarouselInstalacion' data-bs-slide-to='" + index + "'></li>"




    /* Nivo Lightbox
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });

    //=====  Slick Showcase active

    $('.showcase-active').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="bi bi-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="bi bi-arrow-right"></i></span>',
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    //===== Slick

    $('.slider-items-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        arrows: true,
        prevArrow: '<span class="prev"><i class="bi bi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="bi bi-chevron-right"></i></span>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    //===== slick Testimonial Four

    $('.testimonial-active').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="prev"><i class="bi bi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="bi bi-chevron-right"></i></span>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
    });

    /* Custom Selected */



})();