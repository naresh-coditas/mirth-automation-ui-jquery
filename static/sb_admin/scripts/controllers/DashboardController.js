'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('DashboardController', function($scope,$position) {
	$scope.collapseVar = 0;
	$scope.toggleSystemMenu = function(){
		if(collapseVar == 0){
			collapseVar = 1;
		}
		else{
			collapseVar = 0;
		}
	}
  });
