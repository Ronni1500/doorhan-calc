import './styles/fonts.scss';
import './styles/style.scss';
import '../node_modules/slick-carousel/slick/slick.scss';

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'slick-carousel';

const sw = screen.width;


$('[data-design-slider]').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: $('.design-slider__controll__next'),
    prevArrow: $('.design-slider__controll__prev'),
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }
    ]
});

function sliderColor () {
    if(screen.width < 960) {
        $('[data-color-slider]').slick({
            infinite: true,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: $('.calculator-color__controll__next'),
            prevArrow: $('.calculator-color__controll__prev')
        }); 
    } else {
        $('[data-color-slider]').slick('unslick');
    }
}


$(window).resize(function () {
    sliderColor();
});

sliderColor();

$('.design-slider__item').click(function() {
    $('.design-slider__item').removeClass('active');
    $(this).addClass('active');
});


$('.calculator-color__item').click(function(){
    $('.calculator-color__item').removeClass('active');
    $(this).addClass('active');
});
