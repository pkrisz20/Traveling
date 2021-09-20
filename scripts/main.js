window.onscroll = () => {
    myFunction();
};

var header = $(".header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 0) {
    header.addClass("sticky");
  } else {
    header.removeClass("sticky");
  }
}


const menuicon = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

menuicon.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menuicon.classList.toggle('open-menu');
});


$('.post-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});