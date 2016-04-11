// public/js/controllers/AnalyzerCtrl.js
angular.module('AnalyzerCtrl', ['nvd3']).controller('AnalyzerController', function($rootScope, $scope, $filter, Analyzer, Car) {
    $scope.tagline = 'Choose vehicle to analyze';
    $scope.sortType = 'date';
    $scope.sortReverse = true;
    function updateGraphs() {
        $scope.yearCountData = Analyzer.yearCount($scope.singleCarData);
        $scope.yearPriceData = Analyzer.yearPrice($scope.singleCarData);
    }
    $scope.removeCar = function(car) {
        $scope.singleCarData.splice($scope.singleCarData.indexOf(car), 1);
        Car.delete(car.carID);
        updateGraphs();
        // $scope.yearCountData = Analyzer.yearCount($scope.singleCarData);
    };
    
    // TODO: add city filter
    $scope.getCarData = function(city,make,model){
        Car.getByCityMakeModel(city.name,make,model).success(function(data){
            $scope.singleCarData = data;
            $scope.filteredData = data;
            $scope.yearList = Analyzer.yearList(data);
    
            updateGraphs();// $scope.tagline = Analyzer.yearPrice(data);
        });
    };
    $scope.lessThan = function(val){
        return function(data){
            if(val){
                // console.log(data.label + ' ' + val);
                // return data <= val;
                return (parseInt(data) <= parseInt(val));
            }
            else
                return true;
        };
    };
    $scope.greaterThan = function(val){
        return function(data){
            if (val){
                // console.log(data.label + ' ' + val);
                // return data >= val;
                return (parseInt(data) >= parseInt(val));
            }
            else
                return true;
        };
    };
    $scope.filterGraph = function(startYear, endYear){
        var tempData = [];
        for (var listing in $scope.singleCarData) {
            if($scope.singleCarData.hasOwnProperty(listing)){
                // console.log("log" + $scope.singleCarData[listing].year);
                if(parseInt($scope.singleCarData[listing].year) >= startYear && parseInt($scope.singleCarData[listing].year) <= endYear){
                    tempData.push($scope.singleCarData[listing]);
                }
            }
        }
        // console.log("Filtered data:" + filteredData);
        $scope.filteredData = tempData;
        $scope.yearCountData = Analyzer.yearCount($scope.filteredData);
        $scope.yearPriceData = Analyzer.yearPrice($scope.filteredData);
        $scope.$apply();
    };
    $scope.barChartOptions = {
        chart: {
            type: 'discreteBarChart',
            height: 300,
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
        },
        title: {
            enable: true,
            text: 'Data Quantity by Year'
        }
    };
    $scope.boxPlotOptions = {
        chart: {
            type: 'boxPlotChart',
            height: 500,
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
        },
        title: {
            enable: true,
            text: 'Price Distribution by Year'
        }
    };
    $scope.car = {};
    $scope.startingYear = {};
    $scope.endingYear = {};
    // $scope.tagline = $scope.startingYear.selected + ' ' + $scope.endingYear.selected;
});