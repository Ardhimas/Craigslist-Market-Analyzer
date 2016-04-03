// public/js/services/AnalyzerService.js
angular.module('AnalyzerService', []).factory('Analyzer', [function() {
    return {
        // call to get all cars
        yearCount : function(data) {
            var countList = {};
            for (var car in data){
                // if (countList.has(data[car].year)) {
                //     countList.set(data[car].year,countList.get(data[car].year) + 1);
                // } else {
                //     countList.set(data[car].year,1);
                // }
                if (countList.hasOwnProperty(data[car].year)) {
                    countList[data[car].year] += 1;
                } else {
                    countList[data[car].year] = 1;
                }
                // countList.push(data[car].year);
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
        }

    }; 

}]);