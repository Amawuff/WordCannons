'use strict';

/**
 * @ngdoc function
 * @name wordCannonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wordCannonApp
 */
angular.module('wordCannonApp')
  .controller('NewPlayerCrtl', function ($scope, $q, playerFactory, letterFactory) {

  	$scope.player = null;
      $scope.centerAnchor = true;
      $scope.draggableObjects = [];
      $scope.droppedObjects = [];
      $scope.discardCounter = 0;


      $scope.toggleCenterAnchor = function(){
        $scope.centerAnchor = !$scope.centerAnchor;
      };



      $scope.onDragSuccess = function(data,evt){
        console.log('133', '$scope', 'onDragSuccess', '', evt);
        var index = $scope.droppedObjects.indexOf(data);
        if(index == -1){
          $scope.droppedObjects.push(data);
          console.log('drag index: ', index)
        }
      }
      $scope.onDropSuccess = function(data,evt){
        var index = $scope.droppedObjects.indexOf(data);
        if(index == -1){
          $scope.droppedObjects.push(data);
        }
        $scope.discardCounter++;
        console.log('drop index: ', index);
      }

      var inArray = function(array, obj){
        var index = array.indexOf(obj);
      }

	$scope.setPlayer = function(){
   		$scope.player = playerFactory.addPlayer($scope.tempName, $scope.tempHealth);
   		letterFactory.getLetterRand(8).then(function(data,error)
   		{
   		     $scope.player = playerFactory.setTiles(data);
                $scope.draggableObjects = $scope.player.tiles;
                console.log($scope.draggableObjects);
   		})
	}
  });
