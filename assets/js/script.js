var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("assets/js/phone.json").then(function (response)
  {$scope.phones = response.data});
$scope.changeMarque = function(marque) {
    $scope.filterChange = marque;
  };
  $scope.changeOrder = function(order) {
        $scope.orderby = order;
    };
  });
