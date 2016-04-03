// public/js/services/AnalyzerService.js
angular.module('AnalyzerService', []).factory('Analyzer', [function() {
    return {
        // call to get all cars
        yearCount : function(data) {
            var countList = [];
            for (var car in data){
                if (countList[data[car].year]== null) {
                    countList[data[car].year]=1;}
                // } else {
                //     countList[data[car].year]=1;
                // }
                countList.push(data[car].year);
            }
            // var year;
            // var valueList = [];
            // for (year in countList) {
            //     valueList.push({"label":year})
            // }
            var yearData = [{key:"Year Data", values: countList}];
            // console.log($http.get('/api/cars'));
            return yearData;
        }

    }       

}]);