angular.module('sbAdminApp')
	.controller('ActionSetupController', function($scope, $position, $http, API_CONFIG, $state, $stateParams, $modal) {
		var modalInstance = null;
		$scope.formData = {
			id: null
		};
		$scope.actionUIInputData = {

		};
		$scope.init = function() {
			if ($stateParams.actionId != "") {
				$scope.fetchActionDetails($stateParams.actionId);
			}
		};
		$scope.fetchActionDetails = function(actionId) {
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};

			$http.get(API_CONFIG.BASE_URL + "/actions/" + actionId, config).success(function(response) {
				$scope.formData = response;
			});
		};

		$scope.fetchParameterDetails = function(parameterId) {
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};

			$http.get(API_CONFIG.BASE_URL + "/actions/parameter/" + parameterId, config).success(function(response) {
				$scope.actionUIInputData = response;
			});
		};

		$scope.saveTestStepAction = function() {

			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};

			$http.post(API_CONFIG.BASE_URL + "/actions", $scope.formData, config).success(function(response) {
				$scope.formData = response;
			});
		};

		$scope.showParameterPopup = function(fieldType, parameterId) {
			$scope.actionUIInputData.fieldType = fieldType;
			modalInstance = $modal.open({
				templateUrl: "static/views/pages/action-parameters-setup.html",
				windowClass: 'small',
				controller: 'ActionParameterPopupController',
				resolve: {
					fieldType: function() {
						return fieldType;
					},
					parameterId: function(){
						return parameterId;
					},
					actionId : function(){
						return $stateParams.actionId;
					}
				}
			});
		};

		$scope.init();
	});
