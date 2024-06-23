angular.module('sbAdminApp')
	.controller('ActionSetupController', function($scope, $position, $http, API_CONFIG, $state, $stateParams, $modal) {
		var modalInstance = null;
		$scope.formData = {
			id : null
		};
		$scope.actionUIInputData = {
			
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

			$http.get(API_CONFIG.BASE_URL+"/actions/"+actionId, config).success(function(response) {
				$scope.formData = response;
			});
		};
		
		$scope.fetchParameterDetails = function(parameterId){
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};

			$http.get(API_CONFIG.BASE_URL+"/actions/parameter/"+parameterId, config).success(function(response) {
				$scope.actionUIInputData = response;
			});
		};
		
		$scope.saveTestStepAction = function(){
			
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};

			$http.post(API_CONFIG.BASE_URL+"/actions", $scope.formData, config).success(function(response) {
				$scope.formData = response;
			});
		};
		
		 $scope.openAddInputUIElement = function (fieldType) {
            $scope.actionUIInputData.fieldType = fieldType;
            modalInstance = $modal.open({
							templateUrl: "static/views/pages/action-parameters-setup.html",
							scope : $scope,
							windowClass : 'small'
						});
        	};
        
         $scope.openEditInputUIElement = function (parameterId) {
			$scope.fetchParameterDetails(parameterId);
            $scope.actionUIInputData.id = parameterId;
            modalInstance = $modal.open({
							templateUrl: "static/views/pages/action-parameters-setup.html",
							scope : $scope,
							windowClass : 'small'
						});
        	};	
        
        $scope.saveActionParameter = function () {
           var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};

			$http.post(API_CONFIG.BASE_URL+"/actions/"+$stateParams.actionId+"/parameter", $scope.actionUIInputData, config).success(function(response) {
				$scope.fetchActionDetails($stateParams.actionId);
			});
        	};
        
		$scope.init();
	});
