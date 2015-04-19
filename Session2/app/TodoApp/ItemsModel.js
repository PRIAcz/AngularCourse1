TodoAppModule.factory("ItemsModel", ["ItemEntity", "HelperService", function(ItemEntity, HelperService) {
  var ItemsModel = {
    Items: [],

    DeleteItem: function (item) {
      var index = HelperService.FindIndexOfItemById(this.Items, item.Id);

      this.Items.splice(index, 1);
    },

    UpdateItemState: function(item) {
        item.State = !item.State;
        // item is object reference, no need to update collection
    },

    AddItem: function(newItem) {
        // Latest ID
        var latestId = 1;

        if (this.Items.length > 0) {
            latestId = this.Items[this.Items.length - 1].Id;
        }

        newItem.Id = latestId + 1;

        if (!newItem.IsValid()) {
            // Invalid item
            return false;
        }

        this.Items.push(newItem);

        return true;
    }
  };

  return ItemsModel;
}]);
