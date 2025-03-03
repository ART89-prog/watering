$(() => {
    // Ширина окна для ресайза
    WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
    WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
    BODY = document.getElementsByTagName('body')[0]
    OVERLAY = document.querySelector('.overlay')
    // Моб. меню
    $('header .mob_menu_btn').click((e) => {
        e.preventDefault()
        $('header .mob_menu_btn').addClass('active')
        $('body').addClass('menu_open')
        $('header .menu').addClass('show')
        $('.overlay').fadeIn(300)
    })
    $('header .close_btn, header .menu .item a, .overlay').click((e) => {
        $('header .mob_menu_btn').removeClass('active')
        $('body').removeClass('menu_open')
        $('header .menu').removeClass('show')
        $('.overlay').fadeOut(300)
    })
    let header = $('header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
        }
    });

    // Скрол к пунктам меню
    $(".scroll").on("click", function (e) {
        e.preventDefault();
        let id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(id).offset().top - 80
        }, {
            duration: 400,
            easing: "swing"
        });
    });
    // $('body').on('click', '.modal_link', function (e) {
    //     e.preventDefault()
    //     Fancybox.close(true)
    //     Fancybox.show([{
    //         src: $(this).data('content'),
    //         type: 'inline',
    //     }]);
    // })
    // Fancybox.bind('[data-fancybox="gallery"]', {});
    // // Fancybox
    // Fancybox.defaults.autoFocus = false
    // Fancybox.defaults.trapFocus = false
    // Fancybox.defaults.dragToClose = false
    // Fancybox.defaults.placeFocusBack = false
    // Fancybox.defaults.l10n = {
    //     CLOSE: "Закрыть",
    //     NEXT: "Следующий",
    //     PREV: "Предыдущий",
    //     MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
    // }
    // Fancybox.defaults.template = {
    //     // closeButton: '<img src=images/close.png>',
    //     // 	spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
    //     // 	main: null
    //     closeButton: `<button data-fancybox-close class="f-button is-close-btn" title="Закрыть"><img src=images/close.png></button>`
    // }
    // Phone input mask
    const phoneInputs = document.querySelectorAll('input[type=tel]')
    if (phoneInputs) {
        phoneInputs.forEach(el => {
            IMask(el, {
                mask: '+{7} (000) 000-00-00',
                lazy: true
            })
        })
    }
    const swiper = new Swiper('.work .swiper', {
        slidesPerView: 3,
        spaceBetween: 40,
        pagination: {
            el: '.work .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    })

    const swiper4 = new Swiper('.projects .swiper', {
        slidesPerView: 3,
        spaceBetween: 40,
        pagination: {
            el: '.projects .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    })

    const swiper5 = new Swiper('.direction .swiper', {
        slidesPerView: 3,
        spaceBetween: 16,
        allowTouchMove: false,       
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 16
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 16
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 16,
                allowTouchMove: true,
                pagination: {
                    el: '.direction .swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
            1023: {
                slidesPerView: 2,
                spaceBetween: 16
            }
        }
    })


    const swiper3 = new Swiper('.reviews .swiper', {
        slidesPerView: 2,
        spaceBetween: 40,
        pagination: {
            el: '.reviews .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1023: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    })
    const swiper2 = new Swiper('.text-block .swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    })
    window.addEventListener('resize', function () {
        WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
        let windowW = window.outerWidth
        if (typeof WW !== 'undefined' && WW != windowW) {
            // Перезапись ширины окна
            WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
            // Моб. версия
            if (!fakeResize) {
                fakeResize = true
                fakeResize2 = false
                document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
            }
            if (!fakeResize2) {
                fakeResize2 = true
                if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
            } else {
                fakeResize = false
                fakeResize2 = true
            }
        }
    })
})