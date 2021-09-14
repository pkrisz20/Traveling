const tabcontent1 = document.getElementById("Europe");
const tabcontent2 = document.getElementById("America");
const tabcontent3 = document.getElementById("Asia");
const tabcontent4 = document.getElementById("Africa");
const tabcontent5 = document.getElementById("Australia");

tabcontent1.style.display = "block";
tabcontent2.style.display = "none";
tabcontent3.style.display = "none";
tabcontent4.style.display = "none";
tabcontent5.style.display = "none";

function openChart(evt, name) {

  var i, tablinks;

  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  if(name == 'Europe') {

    tabcontent1.style.display = "block";
    tabcontent2.style.display = "none";
    tabcontent3.style.display = "none";
    tabcontent4.style.display = "none";
    tabcontent5.style.display = "none";
    evt.currentTarget.className += " active";
    myChart1.destroy();
    myChart1 = new Chart($('#Europe'), config1);
  }

  else if(name == 'America') {

    tabcontent1.style.display = "none";
    tabcontent2.style.display = "block";
    tabcontent3.style.display = "none";
    tabcontent4.style.display = "none";
    tabcontent5.style.display = "none";
    evt.currentTarget.className += " active";
    myChart2.destroy();
    myChart2 = new Chart($('#America'), config2);
  }

  else if(name == 'Asia') {

    tabcontent1.style.display = "none";
    tabcontent2.style.display = "none";
    tabcontent3.style.display = "block";
    tabcontent4.style.display = "none";
    tabcontent5.style.display = "none";
    evt.currentTarget.className += " active";
    myChart3.destroy();
    myChart3 = new Chart($('#Asia'), config3);
  }

  else if(name == 'Africa') {

    tabcontent1.style.display = "none";
    tabcontent2.style.display = "none";
    tabcontent3.style.display = "none";
    tabcontent4.style.display = "block";
    tabcontent5.style.display = "none";
    evt.currentTarget.className += " active";
    myChart4.destroy();
    myChart4 = new Chart($('#Africa'), config4);
  }

  else if(name == 'Australia') {

    tabcontent1.style.display = "none";
    tabcontent2.style.display = "none";
    tabcontent3.style.display = "none";
    tabcontent4.style.display = "none";
    tabcontent5.style.display = "block";
    evt.currentTarget.className += " active";
    myChart5.destroy();
    myChart5 = new Chart($('#Australia'), config5);
  }
}