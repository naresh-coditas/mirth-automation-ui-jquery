angular.module('sbAdminApp')
	.controller('TestCaseStepEntryController', function($scope, $position, $http, $state, API_CONFIG, $stateParams) {

$scope.actionList = [];
	$scope.formData = {
		testCaseId : $stateParams.testCaseId
	};
		$scope.init = function(){
			$scope.fetchTestCaseDetails($scope.formData.testCaseId);
			$scope.loadActions();
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
		
		$scope.loadActions = function(){
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': 1
				}
			};
			$http.get(API_CONFIG.BASE_URL+"/actions", config).success(function(response) {
				$scope.actionList = response;
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
		$scope.showAddTeststepUI = function(){
			$state.go('dashboard.test-case-step-entry', {'testCaseId': testCaseId});
		};
		$scope.loadActionInputFields = function(actionId){
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': 1
				}
			};
			$http.get(API_CONFIG.BASE_URL+"/actions/"+actionId+"/detail-list", config).success(function(response) {
				$scope.actionUIFields = response;
			});
		};
		$scope.init();
	});