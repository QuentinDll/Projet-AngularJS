var app = angular.module('myApp', []);
<<<<<<< HEAD
app.controller('cardCtrl', function($scope, $http, $rootScope) {
=======
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

app.controller('cardCtrl', function($scope, $http) {
>>>>>>> 5322f00a8f39400ff368d2f93ed9a3a3af3ce5d7
  $http.get('assets/js/phone.json').then(function (response)
  {$scope.myTable = response.data});
  $rootScope.storeItems = function (table) {
    $rootScope.marque.push(table.marque);
    $rootScope.modele.push(table.modele);
    $rootScope.prix.push(table.prix);
    $rootScope.image.push(table.image);
  };
  //récupération des données du tableau phone
});
app.run(['$rootScope', function($rootScope) {
  $rootScope.marque = [];
  $rootScope.modele = [];
  $rootScope.prix = [];
  $rootScope.image = [];
  $rootScope.description = [];
}]);
//fonction envoyant les données dans le panier (cart)
app.controller('storeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}]);
/*app.controller('storeCtrl', ['$http', function($http){
  var phone = $http.get('assets/js/phone.json');
  this.product = phone;
  this.totalItems = 0;
  this.storeItems = function() {
    this.totalItems = this.totalItems + 1;
  };
}]);*/
