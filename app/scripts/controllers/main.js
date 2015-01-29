'use strict';

/**
 * @ngdoc function
 * @name wordCannonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wordCannonApp
 */
angular.module('wordCannonApp')
  .controller('MainCtrl', function ($scope,letterFactory, playerFactory) {

  	var tempName = '';
  	$scope.player = [];
  	$scope.tempPlayerName = ''

 	letterFactory.getLetterRand(8)
 		.then(function(data)
 		{
 			//data returned from getLetterRand is letters array from letterHelper
 			console.log(data);
 			$scope.Letter=data;
 	});
   	
  });
