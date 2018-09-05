// hamburger menu

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// header slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("slider__dots--dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// slick slider

$(document).ready(function(){
  $('.slider-filter').slick({
    mobileFirst: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '15px',
    variableWidth: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1163,
        settings: {
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 4,
          arrows: true,
          slidesToScroll: 2,
          nextArrow: "<button class='slider-filter__next'>&#10230;</button>",
          prevArrow: "<button class='slider-filter__prev'>&#10229;</button>"
        }
      }
    ]
  });
});

var btnContainer = document.querySelector('portfolio__list');
var btns = document.getElementsByClassName('filter__button');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('filter__button--active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace("--active", "");
    }

    this.className += '--active';
  });
}
