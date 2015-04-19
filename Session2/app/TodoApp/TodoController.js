function TodoController($scope, $window, ItemEntity, ItemsModel) {
    $scope.NewItem = new ItemEntity();

    $scope.Items = ItemsModel.Items;

    $scope.AddItem = function() {
        // Extract item from scope
        var newItem = $scope.NewItem;

        if(ItemsModel.AddItem(newItem)) {
          $scope.NewItem = new ItemEntity();
        }
    };

    $scope.DeleteItem = function(item) {
        if ($window.confirm("Are you sure?") === true) {
          ItemsModel.DeleteItem(item);
        }
    };

    $scope.UpdateItemState = function(item) {
        ItemsModel.UpdateItemState(item);
    };
}

TodoAppModule.controller("TodoController", ["$scope", "$window", "ItemEntity", "ItemsModel", TodoController]);
