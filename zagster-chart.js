var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Zagster Bike Share',
            backgroundColor: 'rgb(50, 200, 150)',
            borderColor: 'rgb(50, 200, 150)',
            data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 30]
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