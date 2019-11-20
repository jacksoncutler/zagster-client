// Exercise 14

<<<<<<< HEAD
/* $(helloWorld)
=======
$(helloWorld)
>>>>>>> master

function helloWorld() {
    alert("Hello, World! (but with jQuery)")
} */


// Exercise 15

const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

<<<<<<< HEAD
function updateRideCount(data) {
  numberOfRides = data.count
  $("p#data").html(numberOfRides)
}
=======
/* request to '/rides/count/per_hour' will look a little something like this:

app.get('/rides/count/per_hour', (request, response) => {
	const pool = new Pool({
		connectionString: DATABASE_URL
	})
	
	pool.query('SELECT * FROM rides', (err, results) => {
		response.send(results.rows[0])
		pool.end()
	})
})

*/
>>>>>>> master
