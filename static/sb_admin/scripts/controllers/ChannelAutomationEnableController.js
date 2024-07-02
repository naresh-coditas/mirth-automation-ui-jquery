'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('ChannelAutomationEnableController', function($scope, $position, $http, API_CONFIG, $state, $sce, $modal) {
		$scope.messageFormatTypes = [{ "code": "JSON", "description": "Json" }, { "code": "HL7", "description": "HL7" }, { "code": "RAW_TEXT", "description": "Raw text" }, { "code": "XML", "description": "Xml" }];
		$scope.init = function() {
			$scope.listChannels();
		};

		$scope.listChannels = function() {
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': 1
				}
			};

			$http.get(API_CONFIG.BASE_URL + "/api/mirth/channel-list", config).success(function(response) {
				$scope.channelList = response;
			});
		};
		$scope.init();
	});
