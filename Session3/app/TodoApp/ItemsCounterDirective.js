TodoAppModule.directive("itemsCounter", function() {
  return {
    restrict: "E",
    templateUrl: "app/TodoApp/View/ItemsCounterDirectiveView.html",
    scope: {
      Items: "=items"
    }
  };
});
