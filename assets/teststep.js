function renderTestStepList(value1, value2) {
	var item = JSON.parse(value2);
	seletedChannelID = item.mirthChannel.id;
	seletedChannelName = item.mirthChannel.channelName;
	selectedTestCaseId = item.id;
	$('#testCaseDesc').val(item.testCaseDescription);
	$('#channelName').val(item.mirthChannel.channelName);
	fetchTestStepList(selectedTestCaseId, renderTestStepGrid);
}
function fetchTestStepList(testCaseId, successCallback){
	$.ajax({
		url: API_ENDPOINT + '/test-case/' + testCaseId + '/test-steps',
		method: 'GET',
		contentType: 'application/json',
		headers: {
			'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
			'Content-Type': 'application/json',
			'X-MIRTH-SERVER-ID': X_MIRTH_SERVER_ID
		},
		success: successCallback,
		error: function(xhr, status, error) {
			console.error('Login failed:', status, error);
		}
	});
}

function renderTestStepGrid(data) {
	var tbody = $('#test-step-grid tbody');
	tbody.empty(); // Clear existing content

	$.each(data, function(index, item) {
		// Stringify the item object to pass it to the function
		var jsonString = JSON.stringify(item).replace(/"/g, '&quot;');
		var row = `
                        <tr>
                            <td>
                                <div class="action-buttons">
                                    <button class="btn btn-edit" onclick="handleEdit('${jsonString}')">Edit</button>
                                    <button class="btn btn-view" onclick="handleView('${jsonString}')">View</button>
                                    <button class="btn btn-disable" onclick="handleDisable('${jsonString}')">Disable</button>
                                </div>
                            </td>
                            <td>${item.description}</td>
                            <td>${item.sequence}</td>
                            <td>${item.actionMst.description}</td>
                        </tr>`;
		tbody.append(row);
	});
}

function showAddTeststepUI(){
	showSection('testStepActionSetup','','');
}