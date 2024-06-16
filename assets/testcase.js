function renderAddTestcaseScreenUI(value1, value2) {
	seletedChannelID = value1;
	seletedChannelName = value2;
	$('#channelDropdown')
		.append($("<option></option>")
			.attr("value", value1)
			.text(value2));
	$('#channelDropdown').val(value1);
}

function renderTestCaseList() {
	fetchChannels(function(response) {
		$.each(response, function(index, item) {
			$('#channelDropdown')
				.append($("<option></option>")
					.attr("value", item.id)
					.text(item.channelName));
		});
	});
}
function renderEditTestcaseScreenUI(value1, value2) {
	var item = JSON.parse(value2);
	seletedChannelID = item.mirthChannel.id;
	seletedChannelName = item.mirthChannel.channelName;
	selectedTestCaseId = item.id;
	$('#testCaseId').val(item.testCaseId);
	$('#testCaseDescription').val(item.testCaseDescription);
	$('#channelDropdown')
		.append($("<option></option>")
			.attr("value", seletedChannelID)
			.text(seletedChannelName));
	$('#channelDropdown').val(seletedChannelID);
}
function renderTestCaseGrid(data) {
	var tbody = $('#test-cases-grid tbody');
	tbody.empty(); // Clear existing content

	$.each(data, function(index, item) {
		var jsonString = JSON.stringify(item).replace(/"/g, '&quot;');
		var row = `
                        <tr>
                            <td>
                                <div class="action-buttons">
                                    <button class="btn btn-edit" onclick="showSection('EditTestCaseScreen', '${item.id}','${jsonString}')">Edit</button>
                                    <button class="btn btn-view">View</button>
                                    <button class="btn btn-disable">Disable</button>
                                </div>
                            </td>
                            <td>${item.testCaseId}</td>
                            <td>${item.testCaseDescription}</td>
                            <td>${item.mirthChannel.channelName}</td>
                        </tr>`;
		tbody.append(row);
	});
}
function searchTestCases() {
	$.ajax({
		url: API_ENDPOINT + '/channel/' + $('#channelDropdown').val() + '/test-cases',
		method: 'GET',
		contentType: 'application/json',
		headers: {
			'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
			'Content-Type': 'application/json',
			'X-MIRTH-SERVER-ID': 1
		},
		success: renderTestCaseGrid,
		error: function(xhr, status, error) {
			console.error('Login failed:', status, error);
		}
	});
}

function saveTestCase() {
	var dataPayload = {
		"id": selectedTestCaseId,
		"automationEnabled": true,
		"mirthChannelId": seletedChannelID,
		"testCaseDescription": $('#testCaseDescription').val(),
		"testCaseId": $('#testCaseId').val()
	};
	
	var url = API_ENDPOINT + '/test-cases';
	var method = 'POST';
	if(selectedTestCaseId != ''){
		url = API_ENDPOINT + '/test-cases/'+selectedTestCaseId;
		method = 'PUT';
	}
	$.ajax({
		url: url,
		method: method,
		data: JSON.stringify(dataPayload),
		contentType: 'application/json',
		headers: {
			'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
			'Content-Type': 'application/json',
			'X-MIRTH-SERVER-ID': 1
		},
		success: function(){},
		error: function(xhr, status, error) {
			console.error('Login failed:', status, error);
		}
	});
}