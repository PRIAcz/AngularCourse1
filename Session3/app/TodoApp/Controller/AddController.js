function TodoAddController($scope, $location, ItemEntity, ItemsModel) {
    $scope.NewItem = new ItemEntity();

    $scope.AddItem = function() {
        // Extract item from scope
        var newItem = $scope.NewItem;

        if(ItemsModel.AddItem(newItem)) {
          $scope.NewItem = new ItemEntity();

          $location.path("/");
        }
    };
}

TodoAppModule.controller("TodoAddController", ["$scope", "$location", "ItemEntity", "ItemsModel", TodoAddController]);
