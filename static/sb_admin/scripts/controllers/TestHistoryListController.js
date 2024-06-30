'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('TestHistoryListController', function($scope, $position, $http, API_CONFIG, $state, $sce,$modal) {
		
		$scope.init = function() {
			
			$scope.listTestHistory(1);
		};

		$scope.listTestHistory = function(page) {
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': API_CONFIG.X_MIRTH_SERVER_ID
				},
				params: {
                    page: page - 1,
                    size: 5
                }
			};
			
			$http.get(API_CONFIG.BASE_URL+"/test-run-history", config).success(function(response) {
				$scope.contents = response.content;
                $scope.totalPages = response.totalPages;
                $scope.currentPage = page;
			});
		};
		$scope.showAddTestcaseForm = function(channelId, channelName){
			$state.go('dashboard.test-case-entry', {'channelId': channelId,'testCaseId': null});
		};
		$scope.setPage = function(page) {
            if (page >= 1 && page <= $scope.totalPages) {
                $scope.listTestHistory(page);
            }
        };
		$scope.init();
	});
