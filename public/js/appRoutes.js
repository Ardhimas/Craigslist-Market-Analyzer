// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // cars page that will use the CarController
        .when('/database', {
            templateUrl: 'views/database.html',
            controller: 'CarController'
        })
        
        // parser control page
        .when('/parser', {
            templateUrl: 'views/parser.html',
            controller: 'ParserController'
        })
        
        // analyzer control page
        .when('/analyzer', {
            templateUrl: 'views/analyzer.html',
            controller: 'AnalyzerController'
        });

    $locationProvider.html5Mode(true);

}]);