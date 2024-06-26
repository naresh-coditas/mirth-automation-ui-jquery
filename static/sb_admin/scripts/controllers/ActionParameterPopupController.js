angular.module('sbAdminApp')
	.controller('ActionParameterPopupController', function($scope, $http, $modalInstance, API_CONFIG, fieldType, parameterId, actionId) {
		$scope.actionUIInputData = { "fieldType": fieldType };
		$scope.actionUIInputData.optionValueList = [];
		$scope.newRow = {};
		$scope.fieldType = fieldType;
		$scope.parameterId = parameterId;
		$scope.actionId = actionId;
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

		$scope.saveActionParameter = function() {
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				}
			};

			$http.post(API_CONFIG.BASE_URL + "/actions/" + $scope.actionId + "/parameter", $scope.actionUIInputData, config).success(function(response) {
				$scope.fetchActionDetails($scope.actionId);
			});
		};
		$scope.init = function() {
			if ($scope.parameterId != '' && $scope.parameterId != null) {
				$scope.fetchParameterDetails($scope.parameterId);
			}
		};
		$scope.getPopupTitle = function() {
			var value = '';
			if ($scope.parameterId != '' && $scope.parameterId != null) {
				value = value + 'Edit ';
			}
			else {
				value = value + 'Add ';
			}
			if ($scope.fieldType == 'INPUT') {
				value = value + 'Input ';
			}
			else if ($scope.fieldType == 'ASSERTION') {
				value = value + 'Assertion ';
			}
			else if ($scope.fieldType == 'OUTPUT') {
				value = value + 'Output ';
			}
			value = value + 'Parameter Popup';
			return value;
		};
		$scope.showAddOption = function(enableAddOption) {
			$scope.showAddnewUI = enableAddOption;
		};
		$scope.addOption = function() {
			if ($scope.actionUIInputData.optionValueList == null) {
				$scope.actionUIInputData.optionValueList = [];
			}
			$scope.actionUIInputData.optionValueList.push({ "value": $scope.newRow.value, "label": $scope.newRow.label });
			$scope.showAddnewUI = false;
		};
		$scope.dismiss = function() {
			$modalInstance.dismiss('cancel');
		};
		$scope.init();
	});