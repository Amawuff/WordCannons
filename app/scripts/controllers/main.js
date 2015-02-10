'use strict';

/**
 * @ngdoc function
 * @name wordCannonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wordCannonApp
 */
angular.module('wordCannonApp')
  .controller('MainCtrl', function ($scope,playerFactory) {
  		$scope.player ='';

	 $scope.newPlayer = function(tempname){
	 	$scope.player = playerFactory.createPlayer(tempname);
	 	
	 }


 	
   	
  });
