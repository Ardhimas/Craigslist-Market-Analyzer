// public/js/services/AnalyzerService.js
angular.module('AnalyzerService', []).factory('Analyzer', [function() {

    function findMedian(list) {
        var middle = Math.floor((list.length - 1) / 2); // NB: operator precedence
        if (list.length % 2) {
            return list[middle];
        } else {
            return (list[middle] +list[middle + 1]) / 2.0;
        }
    }
    
    function findUpperQuartile(list) {
        var middle = Math.floor((list.length - 1) / 2);
        // if (list.length % 2){
        return findMedian(list.slice(middle));
        // }else{
        //     return findMedian(list.slice(middle))
        // }
    }
    
    function findLowerQuartile(list) {
        var middle = Math.floor((list.length - 1) / 2);
        // if (list.length % 2){
        return findMedian(list.slice(0,middle + 1));
        
    }
    
    return {
        // call to get all cars
        yearCount : function(data) {
            var countList = {};
            for (var car in data){
                if (countList.hasOwnProperty(data[car].year)) {
                    countList[data[car].year] += 1;
                } else {
                    countList[data[car].year] = 1;
                }
            }
            var valueList = [];
            for (var year in countList) {
                if(countList.hasOwnProperty(year)) {
                    valueList.push({"label":year, "value": countList[year]});
                }
            }
            var yearData = [{key:"Year Data", values: valueList}];
            // console.log($http.get('/api/cars'));
            return yearData;
        },
        
        yearPrice : function(data) {
            var priceList = {};
            for (var car in data){
                if (priceList.hasOwnProperty(data[car].year)) {
                    priceList[data[car].year].push(data[car].price);
                } else {
                    priceList[data[car].year] = [data[car].price];
                }
                priceList[data[car].year].sort();
            }
            var valueList = [];
            for (var price in priceList) {
                var boxValues = {};
                if(priceList.hasOwnProperty(price)) {
                    boxValues.Q1 = findLowerQuartile(priceList[price]);
                    boxValues.Q2 = findMedian(priceList[price]);
                    boxValues.Q3 = findUpperQuartile(priceList[price]);
                    boxValues.whisker_low = Math.min.apply(null,priceList[price]);
                    boxValues.whisker_high = Math.max.apply(null,priceList[price]);
                    valueList.push({"label":price, "values": boxValues});
                }
            }
            // var boxPlotData = [{key:"Year Data", values: valueList}];
            // console.log($http.get('/api/cars'));
            return valueList;
        }

    }; 

}]);