// public/js/controllers/AnalyzerCtrl.js
angular.module('AnalyzerCtrl', ['nvd3']).controller('AnalyzerController', function($scope, Car) {

    $scope.tagline = 'Price analyzer';
    
    $scope.sortType = 'date';
    $scope.sortReverse = false;
    $scope.removeRow = function(item) {
      $scope.singleCarData.splice($scope.singleCarData.indexOf(item), 1);
    };
    function showCharts(data){
        $scope.$apply(function(){
            $scope.singleCarData = data;
            $scope.tagline = data;
        });
    }
    $scope.getCarData = function(make,model){
        Car.getByMakeModel(make,model,showCharts).success(function(data){
            $scope.singleCarData = data;
        });
    };
    $scope.car = {};
    $scope.carList = [
        {make: 'Honda', model: 'Civic'},
        {make: 'Honda', model: 'Accord'},
        {make: 'Toyota', model: 'Corolla'},
        {make: 'Toyota', model: 'Camry'}
    ];

});