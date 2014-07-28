var main = angular.module('main', ['main.home','ui.router']);

main.config(function($stateProvider, $urlRouterProvider) {
  // 在浏览器中输入其他地址时候如果没有匹配的就转到state1，相当于默认路径
  // $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('index', {
      url: "",
      // views!!!
      views: {
        "mains": { templateUrl: '../template/home.html' },
      }
    })
    // .state('search', {
    //   url: "/search",
    //   views: {
    //     "viewA": { template: "route2.viewA" },
    //     "viewB": { template: "route2.viewB" }
    //   }
    // })

    .state('home', {
      url: "/home",
      views: {
        "mains": {templateUrl: "../template/home.html"}
      }
    })
    .state('setting', {
      url: "/setting",
      views: {
        "mains": {templateUrl: "../template/setting.html"}
      }
    })
    .state('search', {
      url: "/search",
      views: {
        "mains": {templateUrl: "../template/search.html"}
      }
    })
    // .state('state2', {
    //   url: "/state2",
    //   templateUrl: "../template/state2.html"
    // })
    // .state('state2.list', {
    //   url: "/list",
    //   templateUrl: "../template/state2.list.html",
    //   controller: function($scope) {
    //     $scope.items = ["A", "Set", "Of", "Things"];
    //   }
    // })
});