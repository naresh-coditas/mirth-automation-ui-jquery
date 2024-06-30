'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('DashboardHeaderController', function($scope,$position) {
	$scope.collapseVar = 0;
	$scope.totalPages = 0;
    $scope.currentPage = 1;
	$scope.toggleSystemMenu = function(){
		if($scope.collapseVar == 0){
			$scope.collapseVar = 1;
		}
		else{
			$scope.collapseVar = 0;
		}
	};
  });
