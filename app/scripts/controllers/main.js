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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
