// public/js/services/CarService.js
angular.module('CarService', []).factory('Car', ['$http', function($http) {

    return {
        // call to get all cars
        get : function() {
            return $http.get('/api/cars');
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