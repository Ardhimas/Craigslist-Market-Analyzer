// public/js/services/CarService.js
angular.module('CarService', []).factory('Car', ['$http', function($http) {

    return {
        // call to get all cars
        getAll : function() {
            console.log($http.get('/api/cars'));
            return $http.get('/api/cars');
        },

        // call to get car by ID
        get : function(id) {
            // var log = $http.get('/api/cars/' + id);
            // console.log(log);
            return $http.get('/api/cars/' + id);
        },
                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new car
        create : function(carData) {
            return $http.post('/api/cars', carData);
        },

        // call to DELETE a car
        delete : function(id) {
            return $http.delete('/api/cars/' + id);
        }
    }       

}]);