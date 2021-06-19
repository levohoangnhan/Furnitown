AOS.init({
    duration: 2000,
    once: true,
});

let $ListItemSlider = $('.slider__item--wrap');

$ListItemSlider.flickity({
    prevNextButtons: false,
    freeScroll: true,
    pageDots: true,
    cellAlign: 'left',
    wrapAround: true,
    groupCells: 1,
    friction: 0.6,
    // autoPlay: 3000,
});

$('.slider__bottom .control .control__back').on('click', function () {
    $ListItemSlider.flickity('previous');
});

$('.slider__bottom .control .control__next').on('click', function () {
    $ListItemSlider.flickity('next');
});
