// public/js/controllers/CarCtrl.js
angular.module('ParserCtrl', []).controller('ParserController', function($scope, Parser, Car) {
    $scope.tagline = 'Welcome to the parser control page';
    // Car.get('56f983cf03388f710fdc1b06').success(function(data){
    //     $scope.tagline = data;
    // })
    function showList(listings){
        $scope.$apply(function(){
            $scope.listData = listings;
            // $scope.tagline = listings;
        });
    }
    $scope.parseCar = function(make,model){
        Parser.get(make,model,showList);
    };
    $scope.post = function(carobj){
        Car.create(carobj);
        // $scope.tagline = carobj;
    };
    // $scope.postAll = function(carData){
    //     var car;
    //     for (car in carData){
    //         $scope.post(car);
    //     }
    // };
    $scope.car = {};
    $scope.carList = [
        {make: 'Honda', model: 'Civic'},
        {make: 'Honda', model: 'Accord'},
        {make: 'Toyota', model: 'Corolla'},
        {make: 'Toyota', model: 'Camry'}
    ];


});