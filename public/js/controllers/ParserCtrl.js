// public/js/controllers/CarCtrl.js
angular.module('ParserCtrl', []).controller('ParserController', function($scope) {

    $scope.tagline = 'Parser control page';
    
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