function renderChannels() {
	fetchChannels(paintChannelListUI);
}

function paintChannelListUI(response) {
	var tableBody = $('#channelsListTable tbody');
	tableBody.empty(); // Clear existing content
	// Iterate through the data and populate the table
	$.each(response, function(index, item) {
		var row = `
                        <tr>
                            <td>
                                <div class="action-buttons">
                                    <button class="btn btn-edit" >Edit</button>
                                    <button class="btn btn-view">View</button>
                                    <button class="btn btn-disable">Disable</button>
                                </div>
                            </td>
                            <td>${item.channelId}</td>
                            <td>${item.channelName}</td>
                            <td>${item.failureTestRate}</td>
                            <td></td>
                            <td>
                                <div class="action-buttons">
                                    <a href="#" class="btn btn-edit" onclick="showSection('AddTestCaseScreen', '${item.id}','${item.channelName}')">Add Test Case</a>
                                    <a href="#" class="btn btn-view">Run Test Now</a>
                                </div>
                            </td>
                        </tr>`;
		tableBody.append(row);
	});
}