import './styles/fonts.scss';
import './styles/style.scss';

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'slick-carousel';


$('[data-design-slider]').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1
});

$(document).on('click', '.design-slider__item', () => {
    $('.design-slider__item').removeClass('active');
    $(this).addClass('active');
});


$(document).on('click', '.calculator-color__item', () => {
    $('.calculator-color__item').removeClass('active');
    $(this).addClass('active');
});
