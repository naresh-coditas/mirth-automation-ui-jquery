API_ENDPOINT = "http://localhost:8080";
X_MIRTH_SERVER_ID = 1;
seletedChannelID = '';
seletedChannelName = '';
selectedTestCaseId = '';
function resertGobalValues() {
	seletedChannelID = '';
	seletedChannelName = '';
	selectedTestCaseId = '';
}
function showSection(sectionId, value1, value2) {
	var fileName = "";
	// Hide all sections
	resertGobalValues();
	switch (sectionId) {
		case "dashboardScreen":
			fileName = "channels.html";
			break;
		case "channelsScreen":
			fileName = "channels.html";
			break;
		case "testCaseSetupScreen":
			fileName = "testCaseList.html";
			break;
		case "testSuitesScreen":
			fileName = "testSuitesScreen.html";
			break;
		case "testRunHistoryScreen":
			fileName = "testRunHistoryScreen.html";
			break;
		case "testStepActionSetup":
			fileName = "testStepActionSetup.html";
			break;
		case "AddTestCaseScreen":
			fileName = "addTestCaseScreen.html";
			break;
		case "EditTestCaseScreen":
			fileName = "addTestCaseScreen.html";
			break;
		case "testStepList":
			fileName = "testStepList.html";
			break;
	}
	$("#main-content").load(fileName, function(response, status, xhr) {
		if (status === "success") {
			console.log("Content loaded successfully.");
			renderUI(sectionId, value1, value2);
		} else if (status === "error") {
			console.error("Failed to load the file:", xhr.status, xhr.statusText);
		}
	});
}

function renderUI(sectionId, value1, value2) {
	switch (sectionId) {
		case "dashboardScreen":
			break;
		case "channelsScreen":
			renderChannels();
			break;
		case "testCaseSetupScreen":
			renderTestCaseList();
			break;
		case "testSuitesScreen":
			fileName = "testSuitesScreen.html";
			break;
		case "testRunHistoryScreen":
			fileName = "testRunHistoryScreen.html";
			break;
		case "testStepActionSetup":
			renderTestStepsetup();
			break;
		case "AddTestCaseScreen":
			renderAddTestcaseScreenUI(value1, value2);
			break;
		case "EditTestCaseScreen":
			renderEditTestcaseScreenUI(value1, value2);
			break;
		case "testStepList":
			renderTestStepList(value1, value2);
			break;
	}
}

function fetchChannels(successCallBack) {
	$.ajax({
		url: API_ENDPOINT + '/channels',
		method: 'GET',
		contentType: 'application/json',
		headers: {
			'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
			'Content-Type': 'application/json',
			'X-MIRTH-SERVER-ID': X_MIRTH_SERVER_ID
		},
		success: successCallBack,
		error: function(xhr, status, error) {
			console.error('Login failed:', status, error);
		}
	});
}