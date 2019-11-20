// Exercise 14

/* $(helloWorld)

function helloWorld() {
    alert("Hello, World! (but with jQuery)")
} */


// Exercise 15

const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("p#data").html(numberOfRides)
}