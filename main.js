const BASE_URL = "https://zagster-service.herokuapp.com"
const MONTH_LIST = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// Call driver function
$(per_month)

// To graph the amount of zagster rentals by month for each year
function per_month() {
    $.getJSON(BASE_URL + "/rides/count/per_month" , get_monthly_counts)
}

// Retrieve data and call CreateGraph function
function get_monthly_counts(data) {
    years = []
    yearly_data = []
    
    // Extract external key/value pairs from {year:[array-of-{months:counts}]} format
    $.each(data, function(key,value) {
        years.push(key)
        yearly_data.push(value) // NOTE: "value" is an array, making yearly_data a 2D array
    })
    
    months = [] // array of x-values passed to graph
    counts = [] // array of y-values passed to graph
    
    // Walk thru each year
    for (i=0; i < years.length; i++) {
        temp_counts = []
        
        // Walk thru each month within the year
        for (j=0; j < yearly_data[i].length; j++) {
            
            // Extract key/value pairs from {month:count} format
            $.each(yearly_data[i][j], function(key,value) {
                months.push(MONTH_LIST[key-1] + ' (' + years[i] + ')') // use name of month & include the year
                counts.push(value)
                temp_counts.push(value)
            })
        }
        console.log('Ride count per-month during ' + years[i] + ': ', temp_counts)
    }
    console.log('Months:', months, 'Rides-per-month:', counts)
    $(createGraph(months, counts))
}

function createGraph(x_list, y_list) {
var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: x_list,
        datasets: [{
            label: '# of Bike Rentals',
            backgroundColor: 'rgb(50, 200, 150)',
            borderColor: 'rgb(50, 200, 150)',
            data: y_list,
        }]
    },

    // Configuration options
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