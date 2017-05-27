(function() {
  'use strict';
  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.message = "";

    $scope.check = function() {
      $scope.message = message($scope.items);
    };

    $scope.reset = function() {
      $scope.message = "";
    }
  }

  function message(items) {
    if (items.trim() == "") {
      return "Please enter data first";
    }
    else if (numberOfItems(items) <= 3) {
      return "Enjoy!";
    }
    else {
      return "Too much!";
    }
  }

  function numberOfItems(items) {
    var items = items.split(",");
    var numberOfItems = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].trim() != "") {
        numberOfItems ++;
      }
    }
    return numberOfItems;
  }
}
)();
