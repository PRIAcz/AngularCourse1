function TodoListController($scope, $window, ItemEntity, ItemsModel) {
    $scope.Items = ItemsModel.Items;

    $scope.DeleteItem = function(item) {
        if ($window.confirm("Are you sure?") === true) {
          ItemsModel.DeleteItem(item);
        }
    };

    $scope.UpdateItemState = function(item) {
        ItemsModel.UpdateItemState(item);
    };

    if($scope.Items.length == 0) {
      // Dummy data
      for(var i = 0; i < 5; i++) {
        ItemsModel.AddItem(
         new ItemEntity(undefined,
          "Task " + i,
          "This is my <3 number " + i,
          (i % 2) ? true : false)
        );
      }
    }
}

TodoAppModule.controller("TodoListController", ["$scope", "$window", "ItemEntity", "ItemsModel", TodoListController]);
