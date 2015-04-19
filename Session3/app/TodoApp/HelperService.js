TodoAppModule.service("HelperService", [function() {
    // Service is instantied using "new" keyword
    // So we will need to use "this" for adding method

    this.FindIndexOfItemById = function(collection, id) {
        for (var i = 0; i < collection.length; i++) {
            var currentValue = collection[i];

            if (currentValue.Id === id) {
                return i;
            }
        }
    };
}]);
