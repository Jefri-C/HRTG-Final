$(document).ready(function () {
    var mainCarousel = $('.main-carousel');
    var thumbCarousel = $('.thumb-carousel');

    mainCarousel.each(function (index) {
        $(this).owlCarousel({
            items: 1,
            loop: false,
            margin: 10,
            nav: false,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            autoplay: false,
            URLhashListener: true,
            startPosition: 'URLHash'
        });
    });


    thumbCarousel.each(function (index) {
        $(this).owlCarousel({
            items: 5,
            loop: false,
            margin: 10,
            nav: false,
            dots: false,
            mouseDrag: false,
            URLhashListener: false
        });
    });

    thumbCarousel.on('click', '.owl-item', function (e) {
        e.preventDefault();
        var clickedItemIndex = $(this).index();
        var mainCarouselIndex = $(this).closest('.thumb-carousel').index('.thumb-carousel');
        mainCarousel.eq(mainCarouselIndex).trigger('to.owl.carousel', [clickedItemIndex, 0]);
        thumbCarousel.eq(mainCarouselIndex).find('.owl-item').removeClass('active');
        $(this).addClass('active');
    });


    mainCarousel.on('changed.owl.carousel', function (event) {
        var currentSlideIndex = event.item.index;
        var mainCarouselIndex = $(this).index('.main-carousel');
        thumbCarousel.eq(mainCarouselIndex).trigger('to.owl.carousel', currentSlideIndex - 5);
    });
});