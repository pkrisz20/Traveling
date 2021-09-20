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


const modal = document.querySelector('.modal-job');
const modalbtn = document.querySelector('.job-btn');
const close_modal = document.getElementById('close-modal');
const jobname = document.getElementById('name-job');
const jobemail = document.getElementById('email-job');
const jobphone = document.getElementById('tel-job');
const jobcv = document.getElementById('cv-job');
const submit_btn = document.getElementsByClassName('modal-btn');

modalbtn.addEventListener('click', () => {

    modal.classList.add('job-open');
    document.body.style.overflowY = "hidden";
    console.log('clicked');
});

close_modal.addEventListener('click', () => {

    modal.classList.remove('job-open');
    document.body.style.overflowY = "scroll";
    jobname.value = "";
    jobemail.value = "";
    jobphone.value = "";
    jobcv.value = "";
});

window.onclick = function(event) {

    if (event.target == modal) {

        modal.classList.remove('job-open');
        document.body.style.overflowY = "scroll";
        jobname.value = "";
        jobemail.value = "";
        jobphone.value = "";
        jobcv.value = "";
    }
};