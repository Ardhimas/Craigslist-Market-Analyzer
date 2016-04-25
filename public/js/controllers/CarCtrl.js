// public/js/controllers/CarCtrl.js
angular.module('CarCtrl', []).controller('CarController', function($scope, $rootScope, Car) {

    $scope.tagline = 'Data retrieved from MongoDB database hosted on mLab';
    
    
      
  $scope.paginate = function(value) {
    $scope.totalItems = $scope.carData.length;
    $scope.currentPage = 1;
    $scope.numPerPage = 10;
    var begin, end, index;
    begin = ($scope.currentPage - 1) * $scope.numPerPage;
    end = begin + $scope.numPerPage;
    index = $scope.carData.indexOf(value);
    return (begin <= index && index < end);
  };
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