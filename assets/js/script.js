var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http, $rootScope) {
  $http.get("assets/js/phone.json").then(function (response)
  {$scope.phones = response.data});
  $scope.changeMarque = function(marque) {
    $scope.filterChange = marque;
  };
  $scope.changeOrder = function(order) {
    $scope.orderby = order;
  };
  });
  app.controller('cardCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope,$http) {
    $http.get('assets/js/phone.json').then(function (response) {
      $scope.myTable = response.data
    });
    $rootScope.storeItems = function (phone) {
      $rootScope.marque.push(phone.marque);
      $rootScope.modele.push(phone.modele);
      $rootScope.prix.push(phone.prix);
      $rootScope.image.push(phone.image);
      $rootScope.description.push(phone.description);
    };
  }]);
  app.run(['$rootScope', function($rootScope) {
    $rootScope.marque = [];
    $rootScope.modele = [];
    $rootScope.prix = [];
    $rootScope.image = [];
    $rootScope.description = [];
    $rootScope.qte = [];
  }]);
//fonction envoyant les données dans le panier (cart)

app.controller('storeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
}]);


/*
app.Controller ('storeController' ['$http', function($http){
var phone = $http.get('assets/js/phone.json');
this.product = phone;
this.totalItems = 0;
this.addItems = function() {
this.totalItems = this.totalItems + 1;
};
}]);
*/
