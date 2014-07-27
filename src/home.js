var momo = angular.module('main.home', ['ui.router']);
momo.config( ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  var start = "asdasd";
  $stateProvider
    .state('home.app1',{
      url: '/app1',
      views: {
        "home": {templateUrl: "../template/home.app1.html"}
      }
    })
    .state('home.app2',{
      url: '/app2',
      views: {
        "home": {templateUrl: "../template/home.app2.html"}
      }
    })
    .state('home.app3',{
      url: '/app3',
      views: {
        "home": {templateUrl: "../template/home.app3.html"}
      }
    });
}]);