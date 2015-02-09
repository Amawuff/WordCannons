'use strict';

/**
 * @ngdoc function
 * @name wordCannonApp.controller:AboutCtrl
 * @description
 * # GameCtrl
 * Controller of the wordCannonApp
 */
angular.module('wordCannonApp')
  .controller('GameCtrl', function ($scope,playerFactory) {
  	$scope.player = playerFactory.getPlayer();
    
  });
