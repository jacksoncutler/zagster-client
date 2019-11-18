//alert("Hello, World!")

$(helloWorld)

function helloWorld() {
    alert("Hello, World! (but with jQuery)")
}

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