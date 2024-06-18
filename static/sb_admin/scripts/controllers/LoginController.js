'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('LoginController', function($scope, $position, $http, $state) {

	$scope.loginInfo = {};
		$scope.login = function() {

			$http.post(API_CONFIG.BASE_URL+"/user/login", $scope.loginInfo).success(function(response) {
				$scope.contents = response;
				sessionStorage.setItem('jwtToken', response.token);
				$state.go('dashboard.home');
			});
		};
		
	});
