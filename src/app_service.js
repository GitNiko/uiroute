/* Services */

// 不依赖要其他服务
var appService = angular.module('app.service', []);

/**
 *
 * @ngdoc service
 * @name AppManage
 * @description 提供平台应用的管理（添加应用，删除应用）
 */
appService.factory('AppManage', [
  function() {
    var appList = {
      'app1': 'installed',
      'app2': 'installed',
      'app3': 'installed',
      'app4': 'installed',
      'app5': 'uninstalled'
    };
    /* api */
    return {
      /**
       *
       * @ngdoc method
       * @name service#getAppList
       * @kind function
       * @description 获取用户已安装的应用列表。
       * @return 返回用户应用列表
       */
      getAppList: function() {
        return appList;
      },
      /**
       *
       * @ngdoc method
       * @name service#setupApp
       * @kind function
       * @description 安装指定应用。
       * @param {string} 应用名
       */
      setupApp: function(app) {
        if (null != appList[app]) {
          appList[app]='installed';
        }
      },
      /**
       *
       * @ngdoc method
       * @name service#uninstallApp
       * @kind function
       * @description 卸载指定应用。
       * @param {string} 应用名
       */
      uninstallApp: function(app) {
        if (null != appList[app]) {
          appList[app]='uninstalled';
        }
      }
    };
  }
]);

appService.provider('unicornLauncher', function UnicornLauncherProvider() {
  var useTinfoilShielding = false;

  this.useTinfoilShielding = function(value) {
   console.log("shit");
  };

  this.$get = ["apiToken", function unicornLauncherFactory(apiToken) {

    // let's assume that the UnicornLauncher constructor was also changed to
    // accept and use the useTinfoilShielding argument
    return [new UnicornLauncher(apiToken, useTinfoilShielding)];
  }];
});
