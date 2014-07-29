#利用angular-ui/ui-router实现嵌套路由
##尝试使用$stateChangeStart来拦截路由变化，2014-07-29
通过侦听`ui-router`的`$stateChangeStart`事件来过滤路由：
```js
controller('myhome', ['$rootScope', '$scope', 'AppManage', function($rootScope, $scope, AppManage) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      if( !AppManage.isInstalled(toParams.app) ) {
        // 如果路由指向的是未安装的应用，
        //则通过修改toParams的路由参数指向错误处理模板
        toParams.app = 'error';
      }
      // 该方法调用后，如果直接在浏览器地址栏输入路径，会发生无限循环
      // 如果仅仅通过ui-sref的点击来访问则不会发生无限循环
      //$urlRouter.sync();
    });
  $scope.appList = AppManage.getInstalledAppList();
}]);
```
实际上这样是OK的。
##尝试在config中使用factory来获取指定的模板路径，2014-07-27
发现其实是*不可以在config中注入factory的*，所以通过factory来指定模板路径不行。
又尝试将factory转为provider，但是这样其他controller又无法使用provider。
##发现可以使用动态路由，2014-07-27
所谓动态路由其实就是，`templareUrl`可以设定成一个方法，并返回模板路径即可。
通过设定路径参数匹配不同的模板。
```js
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
}])
```