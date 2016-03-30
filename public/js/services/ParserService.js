// public/js/services/ParserService.js
angular.module('ParserService', []).factory('Parser', ['$http', function($http) {

    return {
        // call to grab a page given make and model
        get : function(make, model) {
            // angular.element refers to jQuery
            angular.element.get('http://austin.craigslist.org/search/cto?auto_make_model=' + make + '+' + model, function(data) {
                return angular.element(data).find("#titletextonly").text();
            });
            // console.log(log);
            // return $http.get();
        }
    }       

}]);