angular.module('main.home', ['ui.router'])
.config( ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  var start = "asdasd";
  $stateProvider
    .state('home.apps',{
      url: '/:app',
      views: {
        "home": {templateUrl: function($stateParams) {
          return "../template/home." + $stateParams.app + ".html"
        }}
      }
    })
    // .state('home.app2',{
    //   url: '/app2',
    //   views: {
    //     "home": {templateUrl: "../template/home.app2.html"}
    //   }
    // })
    // .state('home.app3',{
    //   url: '/app3',
    //   views: {
    //     "home": {templateUrl: "../template/home.app3.html"}
    //   }
    // });
}]);