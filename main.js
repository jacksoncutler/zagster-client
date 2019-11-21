// Exercise 14

/* $(helloWorld)

function helloWorld() {
    alert("Hello, World! (but with jQuery)")
} */


// Exercise 15

const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateGraph)

function updateGraph() {
  $.getJSON(BASE_URL + "/rides/count/per_year" , updateRideCount)
}

function updateRideCount(data) {
  items = []
  $.each(data, storeData)
  $('p#data').html(items)

  // ORIGINAL
  /* numberOfRides = data.count
  $("p#data").html(numberOfRides) */
}

function storeData(key, value) {
  items.push(' ' + key + ':' + value + ',')
}


$(initGraph)

function initGraph() {
var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        /* labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], */
        labels: ['2016', '2017', '2018'],
        datasets: [{
            label: 'Zagster Bike Share',
            backgroundColor: 'rgb(50, 200, 150)',
            borderColor: 'rgb(50, 200, 150)',
            /* data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 30] */
            data: [50, 50, 50]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
  }