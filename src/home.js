angular.module('main.home', ['app.service', 'ui.router'])
.config( ['$stateProvider', '$urlRouterProvider', 'unicornLauncherProvider', 
  function($stateProvider, $urlRouterProvider, unicornLauncherProvider) {
  var start = "asdasd";
  $stateProvider
    .state('home.apps',{
      url: '/:app',
      views: {
        "home": {templateUrl: function($stateParams) {
          //var kkk = AppManage.getAppList();
          unicornLauncherProvider.useTinfoilShielding(true);
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