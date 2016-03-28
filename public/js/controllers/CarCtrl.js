// public/js/controllers/CarCtrl.js
angular.module('CarCtrl', []).controller('CarController', function($scope, Car) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    Car.getAll().success(function(data){
        $scope.carData = data;
    });

});