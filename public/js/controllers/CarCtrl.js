// public/js/controllers/CarCtrl.js
angular.module('CarCtrl', []).controller('CarController', function($scope, Car) {

    $scope.tagline = 'Data retrieved from locally hosted MongoDB database';
    $scope.removeCar = function(car) {
        $scope.carData.splice($scope.carData.indexOf(car), 1);
        Car.delete(car.carID);
    };
    Car.getAll().success(function(data){
        $scope.carData = data;
    });
    $scope.sortType = 'date';
    $scope.sortReverse = true;
    $scope.car = {};
    $scope.city = {};
});