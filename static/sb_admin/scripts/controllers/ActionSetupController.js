angular.module('sbAdminApp')
	.controller('ActionSetupController', function($scope, $position, $http, API_CONFIG, $state, $stateParams) {
		$scope.formData = {
			id : null
		};
		$scope.init = function() {
			if($stateParams.actionId != ""){
				$scope.fetchActionDetails($stateParams.actionId);
			}
		};
		$scope.fetchActionDetails = function(actionId){
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};

			$http.get(API_CONFIG.BASE_URL+"/channels", config).success(function(response) {
				$scope.contents = response;
			});
		};
		$scope.init();
	});
