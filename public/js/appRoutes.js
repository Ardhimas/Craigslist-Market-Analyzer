// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // cars page that will use the CarController
        .when('/cars', {
            templateUrl: 'views/car.html',
            controller: 'CarController'
        });

    $locationProvider.html5Mode(true);

}]);