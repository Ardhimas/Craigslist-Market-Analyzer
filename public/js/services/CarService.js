// public/js/services/CarService.js
angular.module('CarService', []).factory('Car', ['$http', function($http) {

    return {
        // call to get all cars
        getAll : function() {
            // console.log($http.get('/api/cars'));
            return $http.get('/api/cars');
        },

        // call to get car by ID
        get : function(id) {
            // var log = $http.get('/api/cars/' + id);
            // console.log(log);
            return $http.get('/api/cars/' + id);
        },
        // call to get car by make and model
        getByCityMakeModel : function(city, make, model) {
            // var log = $http.get('/api/cars/' + id);
            // console.log(log);
            return $http.get('/api/cars/' + city + '/' + make + '/' + model);
        },
                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new car
        create : function(carData) {
            // var code = 'make='+carData.make+'&model='+carData.model+'&year='+
            //     carData.year+'&price='+carData.price+'&id='+carData.carid;
            return $http.post('/api/cars', carData);
        },
        
        createMultiple : function(carList) {
            for (var car in carList){
                $http.post('/api/cars',carList[car]);
            }  
        },

        // call to DELETE a car
        delete : function(id) {
            return $http.delete('/api/cars/' + id);
        }
    }       

}]);