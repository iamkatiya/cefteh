$(document).ready(function () {

    $('.magnific').magnificPopup({
        type: 'inline',
        overflowY: 'scroll'
    });

    $('#filter-button').click(function () {
        $(".sort-item").addClass("show-el")
        $(".catalog").addClass("opacity-minus")

    });
    $('#nav_burger').click(function () {
        $('#menu_mobile').slideToggle();
        $(this).toggleClass('opened')
    });
    $('#close').click(function () {
        $(".sort-item").removeClass("show-el")
        $(".catalog").removeClass("opacity-minus")
    });
    $('.header-nav-user-profile').click(function () {
        $('#login_form').slideToggle();
        $('#registration_form').hide()
    });

    $('#registr').click(function () {
        $('#login_form').hide();
        $('#registration_form').slideToggle()
    });
    //слайдер в 1 экране
    $(".main-slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        speed: 600,
        infinite: true,
        adaptiveHeight: true,
        nextArrow: '<a class="slick-next"></a>',
        prevArrow: '<a class="slick-prev"></a>',
        cssEase: 'linear',
        fade: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    dots: true
                }
            }]

    });

    //слайдер брендов
    $(".slider-four").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        speed: 600,
        infinite: true,
        nextArrow: '<a class="slick-next"></a>',
        prevArrow: '<a class="slick-prev"></a>',
        responsive: [
            {
                breakpoint: 1315,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }]
    });

    //слайдер полпулярных товаров
    if ($(window).width() <= 1080 && $(".popular-slider-mobile").length>0) {
        $(function () {
            $(".popular-slider-mobile").slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 10000,
                dots: true,
                speed: 600,
                nextArrow: '<a class="slick-next"></a>',
                prevArrow: '<a class="slick-prev"></a>',
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 508,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }]

            });
        });
    }
    $(".slider-new").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 358,
                settings: {
                    dots: true,
                    slidesToShow: 1.5,
                    slidesToScroll: 3
                }
            }]

    });

    //измененеие порядка цены и кнопки в 1 экране для мобиьной версии
    if ($(window).width() < 992) {
        $('.main-slider-item').each(function () {
            btn_detail = $(this).find('.btn_detail');
            price_row = $(this).find('.price_row');
            price_detail = $(this).find('.price_detail');

            btn_detail.prependTo(price_detail);
            price_row.prependTo(price_detail);
        });

        //формимрование шапки для мобильного (перестановка элементов)
        header_mobile_left = $('.header-nav-mobile-block-items');
        $('.header-nav-user-fav').prependTo(header_mobile_left);
        $('.header-nav-user-basket').prependTo(header_mobile_left);
        $('.header-nav-logo').insertAfter('.header-nav-mobile-block-items');
        header_mobile_right = $('.header-nav-mobile-block');
        $('#nav_burger').prependTo(header_mobile_right);
        $('.header-nav-user').prependTo(header_mobile_right);

        //выравнивание кнопок навигации слайдера
        dots = $('.main-slider .slick-dots');
        margin_left = ($('.main-slider').width() - dots.width()) / 2;
        dots.css('left', margin_left);
    }
    if($('.main-brands-slider .slick-dots').length > 0) {
        left_slick = $('.main-brands-slider .slick-dots').offset().left;
        dots_width = $('.main-brands-slider .slick-dots').width();
        $('.main-brands-slider .slick-prev').css('left', left_slick - 20);
        $('.main-brands-slider .slick-next').css('left', left_slick + dots_width + 53);
    }
    //формирование карточки популярных товаров для мобильного (перестановка элементов)
    if ($(window).width() <= 600 && $('.main-popular-item').length > 0)  {
        $('.main-popular-item').each(function () {
            popular_item_title = $(this).find('.main-popular-item-title');
            popular_item_price = $(this).find('.main-popular-item-price');
            popular_item_price_row = $(this).find('.main-popular-item-price-row');
            popular_item_btn = $(this).find('.main-popular-item-btn');
            popular_item_title.insertBefore(popular_item_price);
            popular_item_btn.insertAfter(popular_item_price_row);
        });
    }



});


// Плавающее меню
$(function () {
    var header_height = $('.header').outerHeight(); // высота шапки
    var header_mrg = -1 * $('.header').offset().top;    // отступ когда шапка уже не видна
    var elem = $('.header-nav');
    var top = $(this).scrollTop();
    if (top > header_height) {
        elem.css('top', header_mrg);
    }
    $(window).scroll(function () {
        top = $(this).scrollTop();
        if (top + header_height > header_height) {
            elem.addClass('fixed');
        } else {
            elem.removeClass('fixed');
        }
    });
});

$(function () {
    $('.number input').on('input change paste', function () {
        $(this).val(this.value.replace(/[^0-9]/, ''));
    });

    $('.number .number_controls > div').on('click', function () {
        var input = $(this).closest('.number').find('input');
        var value = parseInt(input.val()) || 0;
        if ($(this).hasClass('nc-minus')) {
            if (value > 1) {
                value = value - 1;
            }
        }
        if ($(this).hasClass('nc-plus')) {
            value = value + 1;
        }
        input.val(value).change();
    });
});

$(".slider-five").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    infinite: true,
    nextArrow: '<a class="slick-next slick-next_new pr-4"></a>',
    prevArrow: '<a class="slick-prev slick-prev_new pr-4"></a>',
    responsive: [
        {

            breakpoint: 1700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
});
$(".slider-seven").slick({
    slidesToShow: 4,
    slidesToScroll: 0,
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    loop: false,
    speed: 600,
    infinite: true,
    responsive: [
        {

            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
});

$(".slider-six").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    loop:false,
    dots: false,
    easing: 'swing',
    nextArrow: ('.arr-up'),
    prevArrow: ('.arr-down'),
    speed: 600,
    infinite: true,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});

$(".slider-test").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    loop: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                dots: true,
                centerMode: true,
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots: true,
                centerMode: true,
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                dots: true,
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                dots: true,
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
]

});

function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display === 'block') ? 'none' : 'block';
}
