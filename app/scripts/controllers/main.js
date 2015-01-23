'use strict';

/**
 * @ngdoc function
 * @name wordCannonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wordCannonApp
 */
angular.module('wordCannonApp')
  .controller('MainCtrl', function ($scope,letterFactory) {
 	letterFactory.getLetterRand(8)
 		.then(function(data)
 		{
 			//data returned from getLetterRand is letters array from letterHelper
 			$scope.Letter=data
 		})
   
    
  });
