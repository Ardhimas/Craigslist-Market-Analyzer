// public/js/controllers/CarCtrl.js
angular.module('CarCtrl', []).controller('CarController', function($scope, Car) {

    $scope.tagline = 'Data retrieved from locally hosted MongoDB database';
    $scope.removeRow = function(item) {
      $scope.carData.splice($scope.carData.indexOf(item), 1);
    };
    $scope.delete = function(carID){
        Car.delete(carID);
        // $scope.tagline = carobj;
    };
    
    Car.getAll().success(function(data){
        $scope.carData = data;
    });
    $scope.sortType = 'date';
    $scope.sortReverse = false;

});