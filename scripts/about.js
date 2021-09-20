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


$('.counter').countUp({
    time: 2000,
    delay: 10
});

const labels = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//--------------------------//

const data1 = {
    labels: labels,
    datasets: [
        {
            label: 'Travelers',
            backgroundColor: '#00C1FF',
            borderColor: '#00C1FF',
            data: [4850, 5680, 3220, 1500, 3584, 2102, 420, 351, 800, 3210, 1520, 5210],
        },
        {
            label: 'Resignments',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [2102, 1201, 250, 102, 563, 952, 1520, 250, 548, 950, 420, 630],
        }
    ]
};

const data2 = {
    labels: labels,
    datasets: [
        {
            label: 'Travelers',
            backgroundColor: '#00C1FF',
            borderColor: '#00C1FF',
            data: [213, 4534, 2135, 5375, 254, 2554, 879, 7898, 986, 654, 345, 8768],
        },
        {
            label: 'Resignments',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [848, 155, 1534, 1235, 354, 3453, 123, 231, 321, 1560, 354, 648],
        }
    ]
};

const data3 = {
    labels: labels,
    datasets: [
        {
            label: 'Travelers',
            backgroundColor: '#00C1FF',
            borderColor: '#00C1FF',
            data: [4533, 5680, 879, 789, 6456, 5654, 420, 654, 3125, 3210, 3534, 4868],
        },
        {
            label: 'Resignments',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [2102, 1201, 250, 102, 563, 952, 1520, 250, 1864, 950, 420, 630],
        }
    ]
};

const data4 = {
    labels: labels,
    datasets: [
        {
            label: 'Travelers',
            backgroundColor: '#00C1FF',
            borderColor: '#00C1FF',
            data: [879, 8768, 6776, 1500, 6454, 3131, 8387, 5645, 1232, 978, 786, 678],
        },
        {
            label: 'Resignments',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [828, 678, 687, 846, 563, 952, 1520, 250, 156, 950, 420, 630],
        }
    ]
};

const data5 = {
    labels: labels,
    datasets: [
        {
            label: 'Travelers',
            backgroundColor: '#00C1FF',
            borderColor: '#00C1FF',
            data: [3454, 5680, 687, 1500, 687, 2102, 420, 351, 879, 3210, 1520, 867],
        },
        {
            label: 'Resignments',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [564, 1201, 876, 150, 563, 952, 687, 250, 2150, 687, 420, 630],
        }
    ]
};
//---------------------------//
const config1 = {
    type: 'bar',
    data: data1,
    options: {
        animation: {
            duration: 1000,
            easing: 'linear'
        },
        plugins: {
            legend: {
                labels: {
                    color: "white",
                    font: {
                        size: 14
                    }
                }
            }
        },
        responsive: true,
        scales: {

            x: {
                ticks: {
                    color: "white",
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            },
            y: {
                ticks: {
                    color: "white",
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            }
        }
    }
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        animation: {
            duration: 1000,
            easing: 'linear'
        },
        plugins: {
            legend: {
                labels: {
                    color: "white",
                    font: {
                        size: 14
                    }
                }
            }
        },
        responsive: true,
        scales: {

            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
                    color: "white",
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            },
            y: {
                ticks: {
                    color: "white",
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            }
        }
    }
};

const config3 = {
    type: 'bar',
    data: data3,
    options: {
        animation: {
            duration: 1000,
            easing: 'linear'
        },
        plugins: {
            legend: {
                labels: {
                    color: "white",
                    font: {
                        size: 14
                    }
                }
            }
        },
        responsive: true,
        scales: {

            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
                    color: "white",
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            },
            y: {
                ticks: {
                    color: "white",
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            }
        }
    }
};

const config4 = {
    type: 'bar',
    data: data4,
    options: {
        animation: {
            duration: 1000,
            easing: 'linear'
        },
        plugins: {
            legend: {
                labels: {
                    color: "white",
                    font: {
                        size: 14
                    }
                }
            }
        },
        responsive: true,
        scales: {

            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
                    color: "white",
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            },
            y: {
                ticks: {
                    color: "white",
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            }
        }
    }
};

const config5 = {
    type: 'bar',
    data: data5,
    options: {
        animation: {
            duration: 1000,
            easing: 'linear'
        },
        plugins: {
            legend: {
                labels: {
                    color: "white",
                    font: {
                        size: 14
                    }
                }
            }
        },
        responsive: true,
        scales: {

            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
                    color: "white",
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            },
            y: {
                ticks: {
                    color: "white",
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: "white",
                }
            }
        }
    }
};

//----------------------------//

var myChart1 = new Chart($('#Europe'), config1);
var myChart2 = new Chart($('#America'), config2);
var myChart3 = new Chart($('#Asia'), config3);
var myChart4 = new Chart($('#Africa'), config4);
var myChart5 = new Chart($('#Australia'), config5);

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