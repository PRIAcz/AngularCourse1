var TodoAppModule = angular.module("TodoApp", ["ngRoute"]);

TodoAppModule.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "app/TodoApp/View/ListView.html",
      controlller: "TodoListController"
    })

    .when("/add", {
      templateUrl: "app/TodoApp/View/AddView.html",
      controller: "TodoAddController"
    });

    $locationProvider.html5Mode(true);
}]);
