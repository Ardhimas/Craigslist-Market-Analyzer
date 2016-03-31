// public/js/controllers/CarCtrl.js
angular.module('ParserCtrl', []).controller('ParserController', function($scope, Parser) {
    $scope.tagline = 'Welcome to the parser control page';
    // $scope.listData = ["hello","lonely"];
    function showList(listings){
        $scope.$apply(function(){
            $scope.listData = listings;
            // $scope.tagline = listings;
            // alert($scope.listData);
        });
    }
    $scope.parseCar = function(make,model){
        Parser.get(make,model,showList);
    };
    $scope.car = {};
    $scope.carList = [
        {make: 'Honda', model: 'Civic'},
        {make: 'Toyota', model: 'Corolla'}
        // {id: 1, name: 'Honda'},
        // {id: 2, name: 'Toyota'},
        // {id: 3, name: 'third'},
        // {id: 4, name: 'fourth'},
        // {id: 5, name: 'fifth'},
    ];


});