var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("assets/js/phone.json").then(function (response)
    {$scope.phone = response.data});
});
