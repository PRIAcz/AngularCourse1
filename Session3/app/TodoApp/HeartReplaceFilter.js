TodoAppModule.filter("HeartReplace", [function() {
  return function (input) {
    var index = input.indexOf("<3");

    if(index > -1) {
      return input.replace("<3", "\u2665");
    }

    return input;
  };
}]);
