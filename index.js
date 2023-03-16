$(document).ready(function () {
    var mainCarousel = $('.main-carousel');
    var thumbCarousel = $('.thumb-carousel');

    mainCarousel.each(function (index) {
        $(this).owlCarousel({
            items: 1,
            loop: true,
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
            items: 4,
            loop: false,
            margin: 10,
            nav: true,
            dots: false,
            mouseDrag: true,
            URLhashListener: true,
            startPosition: 'URLHash'
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

var navi = document.getElementById('nav');
var faq = document.getElementById('faq');

function ham() {
    var element = document.getElementById('hamburger');
    element.classList.toggle('active');

    var text = document.getElementById("menu");
    if (text.innerHTML === "Menu") {
        text.innerHTML = "Close";
    }
    else {
        text.innerHTML = "Menu"
    }

    if (navi.style.display == "block" && faq.style.display == "none") {
        navi.style.display == "block" ? navi.style.display = "none" : navi.style.display = "block";
    } else if (navi.style.display == "none" && faq.style.display == "block") {
        faq.style.display == "block" ? faq.style.display = "none" : faq.style.display = "block";
    } else {
        navi.style.display == "block" ? navi.style.display = "none" : navi.style.display = "block";
    }
}


function ref() {
    var links = document.getElementById('ref');
    links.style.display == "block" ? links.style.display = "none" : links.style.display = "block";

    var element = document.getElementById('hamburger');
    element.classList.toggle('active');

    var text = document.getElementById("menu");
    if (text.innerHTML === "Menu") {
        text.innerHTML = "Close";
    }
    else {
        text.innerHTML = "Menu"
    }
}

function Faq() {
    faq.style.display == "block" ? faq.style.display = "none" : faq.style.display = "block";
    var element = document.getElementById('hamburger');
    element.classList.toggle('active');

    var text = document.getElementById("menu");
    if (text.innerHTML === "Menu") {
        text.innerHTML = "Close";
    }
    else {
        text.innerHTML = "Menu"
    }
}

function container() {
    navi.style.display == "block" ? navi.style.display = "none" : navi.style.display = "block";
    var element = document.getElementById('hamburger');
    element.classList.toggle('active');

    var text = document.getElementById("menu");
    if (text.innerHTML === "Menu") {
        text.innerHTML = "Close";
    }
    else {
        text.innerHTML = "Menu"
    }
}