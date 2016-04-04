// public/js/controllers/AnalyzerCtrl.js
angular.module('AnalyzerCtrl', ['nvd3']).controller('AnalyzerController', function($scope, Analyzer, Car) {

    $scope.tagline = 'Price analyzer';
    
    $scope.sortType = 'date';
    $scope.sortReverse = false;
    $scope.removeRow = function(item) {
      $scope.singleCarData.splice($scope.singleCarData.indexOf(item), 1);
    };
    // function showCharts(data){
    //     $scope.$apply(function(){
    //         // $scope.singleCarData = data;
    //         // $scope.tagline = data;
    //     });
    // }
    $scope.getCarData = function(make,model){
        Car.getByMakeModel(make,model).success(function(data){
            $scope.singleCarData = data;
            $scope.yearCountData = Analyzer.yearCount(data);
            $scope.yearPriceData = Analyzer.yearPrice(data);
            // $scope.tagline = Analyzer.yearPrice(data);
        });
    };
    $scope.barChartOptions = {
        chart: {
            type: 'discreteBarChart',
            height: 350,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 70
            },
            x: function(d){ return d.label; },
            y: function(d){ return d.value; },
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.d')(d);
            },
            transitionDuration: 500,
            xAxis: {
                axisLabel: 'Year'
            },
            yAxis: {
                axisLabel: 'Count',
                // axisLabelDistance: 30,
                tickFormat: d3.format('.0f'),
                ticks: 0
            }
        }
    };
    $scope.boxPlotOptions = {
        chart: {
            type: 'boxPlotChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 70
            },
            // color:['darkblue', 'darkorange', 'green', 'darkred', 'darkviolet'],
            x: function(d){return d.label;},
            // y: function(d){return d.values.Q3;},
            // maxBoxWidth: 75,
            // yDomain: [0, 500]
        }
    };
    $scope.car = {};
    $scope.carList = [
        {make: 'Honda', model: 'Civic'},
        {make: 'Honda', model: 'Accord'},
        {make: 'Toyota', model: 'Corolla'},
        {make: 'Toyota', model: 'Camry'}
    ];

});