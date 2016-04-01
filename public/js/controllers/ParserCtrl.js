// public/js/controllers/CarCtrl.js
angular.module('ParserCtrl', []).controller('ParserController', function($scope, Parser) {
    $scope.tagline = 'Welcome to the parser control page';
    function showList(listings){
        $scope.$apply(function(){
            $scope.listData = listings;
            // $scope.tagline = listings;
        });
    }
    $scope.parseCar = function(make,model){
        Parser.get(make,model,showList);
    };
    $scope.car = {};
    $scope.carList = [
        {make: 'Honda', model: 'Civic'},
        {make: 'Honda', model: 'Accord'},
        {make: 'Toyota', model: 'Corolla'},
        {make: 'Toyota', model: 'Camry'}
    ];


});