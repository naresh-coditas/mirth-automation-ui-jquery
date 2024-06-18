angular.module('sbAdminApp')
	.controller('TestCaseStepListController', function($scope, $position, $http, $state, API_CONFIG, $stateParams) {

	$scope.formData = {
		mirthChannelId: $stateParams.channelId,
		testCaseId : $stateParams.testCaseId,
		automationEnabled : true
	};
		$scope.init = function(){
			$scope.fetchTestCaseDetails($scope.formData.testCaseId);
			$scope.loadTestStepList($scope.formData.testCaseId);
		};
		$scope.fetchTestCaseDetails = function(testCaseId){
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': 1
				}
			};
			$http.get(API_CONFIG.BASE_URL+"/test-cases/"+testCaseId, config).success(function(response) {
				$scope.formData.channelName= response.mirthChannel.channelName;
				$scope.formData.testCaseDescription = response.testCaseDescription;
			});
		};
		
		$scope.loadTestStepList = function(testCaseId){
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': 1
				}
			};
			$http.get(API_CONFIG.BASE_URL+"/test-case/"+testCaseId+ '/test-steps', config).success(function(response) {
				$scope.testStepList = response;
			});
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
			$state.go('dashboard.test-case-edit-entry', {'testCaseId': testCaseId,'channelId':channelId});
		};
		$scope.init();
	});