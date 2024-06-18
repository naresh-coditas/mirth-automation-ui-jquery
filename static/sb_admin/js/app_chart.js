function loadChart() {
	// Initialize and render a pie chart
	var pieChartCanvas = document.getElementById('pieChart');
	var pieChart = new Chart(pieChartCanvas, {
		type: 'pie',
		data: {
			labels: ['Failed', 'Succeeded', 'Not Executed'],
			datasets: [{
				data: [15, 70, 15],
				backgroundColor: ['#dc3545', '#28a745', '#ffc107']
			}]
		}
	});

	// Initialize and render a bar chart
	var barChartCanvas = document.getElementById('barChart');
	var barChart = new Chart(barChartCanvas, {
		type: 'bar',
		data: {
			labels: ['Channel 1', 'Channel 2', 'Channel 3'],
			datasets: [{
				label: 'Failed Percentage',
				data: [20, 35, 10],
				backgroundColor: '#dc3545'
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});
}
