'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('ChannelController', function($scope, $position, $http, API_CONFIG, $state, $sce,$modal) {
		$scope.init = function() {
			
			$scope.listChannels();
		};

		$scope.listChannels = function() {
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
		$scope.showAddTestcaseForm = function(channelId, channelName){
			$state.go('dashboard.test-case-entry', {'channelId': channelId,'testCaseId': null});
		};
		
		$scope.init();
	});
