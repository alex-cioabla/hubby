import $ from 'jquery';
import 'owl.carousel';

$(window).on('load', function () {
    $('#js-preloader').addClass('loaded');
});

$(window).on('scroll', function () {
    $('header').toggleClass('header-alt', $(window).scrollTop() > 15);
});


