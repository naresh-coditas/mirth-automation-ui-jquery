function signIn() {
	// Perform authentication logic
	// For simplicity, just toggle the display of login and welcome containers
	document.querySelector('.container.mt-5').style.display = 'none';
	document.querySelector('.container.mt-5[style="display:none;"]').style.display = 'block';
	document.getElementById('dashboardScreen').style.display = "block";
}

function showStepActionFields(value) {
	document.getElementById("input-data-div").style.display = "none";
	document.getElementById("connector-status-div").style.display = "none";
	document.getElementById("connector-result-div").style.display = "none";
	document.getElementById("custom-div").style.display = "none";
	if (value == 'SEND_MESSAGE' || value == 'SEND_MESSAGE_WITH_RANDOM_VALUES') {
		document.getElementById("input-data-div").style.display = "block";
	}
	if (value == 'VERIFY_CONNECTOR_STATUS') {
		document.getElementById("connector-status-div").style.display = "flex";
	}
	if (value == 'VERIFY_CONNECTOR_RESULT') {
		document.getElementById("connector-result-div").style.display = "flex";
	}
	if (value == 'CUSTOM') {
		document.getElementById("custom-div").style.display = "block";
	}
}	
