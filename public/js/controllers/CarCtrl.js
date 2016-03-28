// public/js/controllers/CarCtrl.js
angular.module('CarCtrl', []).controller('CarController', function($scope, Car) {

    $scope.tagline = 'Data retrieved from locally hosted MongoDB database';
    Car.getAll().success(function(data){
        $scope.carData = data;
    });

});