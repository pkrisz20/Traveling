window.onscroll = () => {
    myFunction();
}

var header = $(".header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 0) {
    header.addClass("sticky");
  } else {
    header.removeClass("sticky");
  }
}