'use strict';

/**
 * @ngdoc function
 * @name wordCannonApp.controller:AboutCtrl
 * @description
 * # GameCtrl
 * Controller of the wordCannonApp
 */
angular.module('wordCannonApp')
  .controller('GameCtrl', function ($scope,playerFactory,letterFactory) {
  	$scope.player = playerFactory.getPlayer();
  	$scope.word =[];
  	$scope.letterpool =[];                     
  	$scope.discard =[];

       $scope.handleDrop = function(item, bin) {
    alert('Item ' + item + ' has been dropped into ' + bin);
  }
  	
  	//get initial tiles
    letterFactory.getLetterRand(8)
                        .then( 
                            function (data,error){
                                //once the data has loaded set player.tiles
                                $scope.letterpool = data;

                                }
                            );

  });
