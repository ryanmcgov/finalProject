'use strict';

angular
  .module('whatNext', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'whatNext.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
  .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
       // Allow loading from our assets domain.  Notice the difference between * and **.
       'http://ghbtns.com/github-btn.html/**']);
     });

angular.module('whatNext.directives', [
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools'
]);
