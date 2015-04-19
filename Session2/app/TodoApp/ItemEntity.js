TodoAppModule.factory("ItemEntity", [function() {
    function ItemEntity(id, title, description, state) {
        this.Id = +id;
        this.Title = title;
        this.Description = description;
        this.State = !!state;

        this.IsValid = function(strict) {
            // strict is by default false
            strict = typeof strict !== 'undefined' ? strict : false;

            var nonStrictValidation = (
                (+this.Id != 0 && +this.Id != NaN) &&
                (this.Title !== "" && this.Title !== undefined)
            );

            if (strict == false) {
                return nonStrictValidation;
            }

            if (strict == true) {
                var strictValidation = (
                    (this.Description !== "" && this.Description !== undefined) &&
                    this.State !== undefined
                );

                return (nonStrictValidation && strictValidation);
            }
        };
    }

    // Now we return constructor function
    // So in controller we can use "new" keyword to create new instance of ItemEntity
    return ItemEntity;
}]);
