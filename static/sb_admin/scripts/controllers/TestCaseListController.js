angular.module('sbAdminApp')
	.controller('TestCaseListController', function($scope, $position, $http, $state, API_CONFIG, $stateParams) {

	$scope.listChannels = function() {
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};

			$http.get(API_CONFIG.BASE_URL+"/channels", config).success(function(response) {
				$scope.channelList = response;
			});
		};
		$scope.init = function(){
			$scope.listChannels();
		};
		
		$scope.searchTestCases = function(){
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};
			$http.get(API_CONFIG.BASE_URL+"/channel/"+$scope.mirthChannelId+'/test-cases', config).success(function(response) {
				$scope.testCaseList = response;
			});
		};
		$scope.showEditTestcaseForm = function(channelId, testCaseId){
			$state.go('dashboard.test-case-edit-entry', {'channelId':channelId, 'testCaseId': testCaseId});
		};
		$scope.showAddTestCaseScreen = function(){
			$state.go('dashboard.test-case-entry', {'channelId':$scope.mirthChannelId});
		};
		$scope.init();
	});