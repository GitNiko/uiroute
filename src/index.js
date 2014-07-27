var main = angular.module('main', ['ui.router']);

main.config(function($stateProvider, $urlRouterProvider) {
  // 在浏览器中输入其他地址时候如果没有匹配的就转到state1，相当于默认路径
  //$urlRouterProvider.otherwise("/index");
  $stateProvider
    .state('index', {
      url: "",
      // views!!!
      views: {
        "viewA": { template: "index.viewA" },
        "viewB": { template: "index.viewB" }
      }
    })
    .state('route1', {
      url: "/route1",
      views: {
        "viewA": { template: "route1.viewA" },
        "viewB": { template: "route1.viewB" }
      }
    })
    .state('route2', {
      url: "/route2",
      views: {
        "viewA": { template: "route2.viewA" },
        "viewB": { template: "route2.viewB" }
      }
    })
    // .state('state1', {
    //   url: "/state1",
    //   templateUrl: "../template/state1.html"
    // })
    // .state('state1.list', {
    //   url: "/list",
    //   templateUrl: "../template/state1.list.html",
    //   controller: function($scope) {
    //     $scope.items = ["A", "List", "Of", "Items"];
    //   }
    // })
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