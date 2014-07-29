angular.module('main.setting', ['app.service', 'ui.router'])
.controller('mysetting', ['$scope', 'AppManage', function($scope, AppManage) {
  $scope.appList = AppManage.getAppList();
  $scope.opera = function(app) {
    if (AppManage.isInstalled(app)) {
      AppManage.uninstallApp(app);
    } else {
      AppManage.setupApp(app);
    }
    
  };
}]);