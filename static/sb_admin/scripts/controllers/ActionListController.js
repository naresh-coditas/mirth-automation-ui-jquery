angular.module('sbAdminApp')
	.controller('ActionListController', function($scope, $position, $http, API_CONFIG, $state) {
		$scope.init = function() {
			
			$scope.fetchActionList();
		};
		$scope.fetchActionList = function(){
			
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};
			$http.get(API_CONFIG.BASE_URL+"/actions", config).success(function(response) {
				$scope.actionList = response;
			});
		};
		$scope.showAddTestStepActionUI = function(){
			$state.go('dashboard.action-setup');
		};
		$scope.showEditTestStepActionUI = function(actionID){
			$state.go('dashboard.action-setup', {'actionId': actionID});
		};
		$scope.init();
	});
