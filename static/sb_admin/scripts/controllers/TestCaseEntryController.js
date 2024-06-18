angular.module('sbAdminApp')
	.controller('TestCaseEntryController', function($scope, $position, $http, $state, API_CONFIG, $stateParams) {

$scope.testCaseId = $stateParams['testCaseId'];
	$scope.formData = {
		mirthChannelId: $stateParams.channelId,
		id : $stateParams.testCaseId,
		automationEnabled : true
	};
	$scope.channelList = null;
		$scope.listChannels = function() {
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': 1
				}
			};

			$http.get(API_CONFIG.BASE_URL+"/channels", config).success(function(response) {
				$scope.channelList = response;
				$scope.formData.channelId = $stateParams.channelId;
				$scope.formData.id = $stateParams.testCaseId;
			});
		};
		$scope.init = function(){
			$scope.listChannels();
			if($scope.formData.id != ""){
				$scope.fetchTestCaseDetails($scope.formData.id);
			}
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
				$scope.formData.id= response.id;
				$scope.formData.testCaseId = response.testCaseId;
				$scope.formData.testCaseDescription = response.testCaseDescription;
			});
		};
		
		$scope.saveTestCase = function(){
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': 1
				}
			};
			$http.post(API_CONFIG.BASE_URL+"/test-cases", $scope.formData, config).success(function(response) {
				$scope.formData.id= response.id;
			});
		};
		
		$scope.updateTestCase = function(){
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': 1
				}
			};
			$http.put(API_CONFIG.BASE_URL+"/test-cases/"+$scope.formData.id, $scope.formData ,config).success(function(response) {
				$scope.formData = response;
			});
		};
		
		$scope.showAddStepsList = function(){
			$state.go('dashboard.test-case-step-list', {'testCaseId': $scope.formData.id});
		};
		
		
		
		
		$scope.init();
		
	});