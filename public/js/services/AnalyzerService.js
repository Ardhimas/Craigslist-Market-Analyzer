// public/js/services/AnalyzerService.js
angular.module('AnalyzerService', []).factory('Analyzer', [function() {

    function findMedian(list) {
        // list.sort();
        var middle = Math.floor((list.length - 1) / 2);
        if (list.length % 2) {
            return list[middle];
        } else {
            return (list[middle] +list[middle + 1]) / 2.0;
        }
    }
    
    function findUpperQuartile(list) {
        // list.sort();
        var middle = Math.floor((list.length - 1) / 2);
        // if (list.length % 2){
        return findMedian(list.slice(middle));
        // }else{
        //     return findMedian(list.slice(middle))
        // }
    }
    
    function findLowerQuartile(list) {
        // list.sort();
        var middle = Math.floor((list.length - 1) / 2);
        // if (list.length % 2){
        return findMedian(list.slice(0,middle + 1));
        
    }
    
    function findOutliers(list, lowerQuartile, upperQuartile) {
        var interQuartileRange = upperQuartile - lowerQuartile;
        var lowerFence = lowerQuartile - 1.5 * interQuartileRange;
        var upperFence = upperQuartile + 1.5 * interQuartileRange;
        var outlierList = [];
        for (var num in list) {
            if (list[num] < lowerFence || list[num] > upperFence) {
                console.log(list[num] + " LF: " + lowerFence + " UF: " + upperFence);
                outlierList.push(list[num]);
            }
        }
        return outlierList;
    }
    
    // Whiskers are max/min value in list that are still within 1.5 IQR of the upper/lower quartile.
    function findWhiskers(list, lowerQuartile, upperQuartile) {
        if(list.length == 2){
            return {lowerWhisker: list[0], upperWhisker: list[1]};
        }else if(list.length == 1){
            return {lowerWhisker: list[0], upperWhisker: list[0]};
        }
        var interQuartileRange = upperQuartile - lowerQuartile;
        var lowerFence = lowerQuartile - 1.5 * interQuartileRange;
        var upperFence = upperQuartile + 1.5 * interQuartileRange;
        var lowerWhisker = Number.MAX_VALUE;
        var upperWhisker = 0;
        for (var num in list) {
            if (list[num] > lowerFence && list[num] < lowerWhisker) {
                lowerWhisker = list[num];
            }
            if (list[num] < upperFence && list[num] > upperWhisker) {
                upperWhisker = list[num];
            }
        }
        return {lowerWhisker: lowerWhisker, upperWhisker: upperWhisker};
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
                priceList[data[car].year].sort(function(a, b){return a-b});
            }
            var valueList = [];
            for (var price in priceList) {
                var boxValues = {};
                if(priceList.hasOwnProperty(price)) {
                    boxValues.Q1 = findLowerQuartile(priceList[price]);
                    boxValues.Q2 = findMedian(priceList[price]);
                    boxValues.Q3 = findUpperQuartile(priceList[price]);
                    var whiskers = findWhiskers(priceList[price], boxValues.Q1, boxValues.Q3)
                    boxValues.whisker_low = whiskers.lowerWhisker;
                    boxValues.whisker_high = whiskers.upperWhisker;
                    boxValues.outliers = findOutliers(priceList[price], boxValues.Q1, boxValues.Q3);
                    console.log(boxValues);
                    valueList.push({"label":price, "values": boxValues});
                }
            }
            // var boxPlotData = [{key:"Year Data", values: valueList}];
            // console.log($http.get('/api/cars'));
            return valueList;
        }

    }; 

}]);