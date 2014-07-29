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
      'app1': {
        'id': '1',
        'name': 'app1',
        'description': 'description of app1',
        'state': 'installed'
      },
      'app2': {
        'id': '2',
        'name': 'app2',
        'description': 'description of app2',
        'state': 'installed'
      },
      'app3': {
        'id': '3',
        'name': 'app3',
        'description': 'description of app3',
        'state': 'installed'
      },
      'app4': {
        'id': '4',
        'name': 'app4',
        'description': 'description of app4',
        'state': 'installed'
      },
      'app5': {
        'id': '5',
        'name': 'app5',
        'description': 'description of app5',
        'state': 'installed'
      },
      'app6': {
        'id': '6',
        'name': 'app6',
        'description': 'description of app6',
        'state': 'uninstalled'
      }
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
       * @name service#getInstalledAppList
       * @kind function
       * @description 获取用户已经安装的应用列表。
       * @return 返回用户已经安装的应用列表
       */
      getInstalledAppList: function() {
        var installedList = {};
        angular.forEach(appList, function(app, key) {
          if( 'installed' === app.state) {
            this[key] = app;
          }
        }, installedList);
        return installedList;
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
          appList[app].state='installed';
        }
        console.log(appList);
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
          appList[app].state='uninstalled';
        }
        console.log(appList);
      },
      /**
       *
       * @ngdoc method
       * @name service#isInstalled
       * @kind function
       * @description 是否安装了指定应用。
       * @param {string} 应用名
       */
      isInstalled: function(app) {
        if (null == appList[app]) {
          return false;
        } else if ('installed' === appList[app].state) {
          return true;
        } else {
          return false;
        }
      }
    };
  }
]);


