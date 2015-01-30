'use strict';

/**
 * @ngdoc overview
 * @name wordCannonApp
 * @description
 * # wordCannonApp
 *
 * Main module of the application.
 */
angular
  .module('wordCannonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDraggable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/newplayer', {
        templateUrl: 'views/newplayer.html',
        controller: 'NewPlayerCrtl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


