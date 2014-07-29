angular.module('main.home', ['app.service', 'ui.router'])
.config( ['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
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
}]).controller('myhome', ['$rootScope', '$scope', 'AppManage', function($rootScope, $scope, AppManage) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      if( !AppManage.isInstalled(toParams.app) ) {
        toParams.app = 'error';
      }
      //$urlRouter.sync();
    });
  $scope.appList = AppManage.getInstalledAppList();
}]);