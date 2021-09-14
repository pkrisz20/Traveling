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