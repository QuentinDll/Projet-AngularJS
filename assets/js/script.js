var app = angular.module('myApp', []);
app.controller('cardCtrl', function($scope, $http) {
  $http.get('assets/js/phone.json').then(function (response)
  {$scope.myTable = response.data});
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
  $rootScope.store.addItems = function () {
    $rootScope.marque.push($scope.usermarque);
    $rootScope.modele.push($scope.usermodele);
    $rootScope.prix.push($scope.userprix);
    $rootScope.image.push($scope.userimage);
    $rootScope.description.push($scope.userdescription);
  };
}]);
app.Controller ('storeController' ['$http', function($http){
  var phone = $http.get('assets/js/phone.json');
  this.product = phone;
  this.totalItems = 0;
  this.addItems = function() {
    this.totalItems = this.totalItems + 1;
  };
}]);
