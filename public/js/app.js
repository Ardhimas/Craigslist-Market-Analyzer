// public/js/app.js
angular.module('cmaApp', ['ngRoute', 'ngSanitize', 'ui.select', 'appRoutes', 
    'MainCtrl', 'CarCtrl', 'ParserCtrl', 'AnalyzerCtrl', 'CarService', 
    'ParserService', 'AnalyzerService'])
    .run(function($rootScope){
        $rootScope.carList = [
            {make: 'Honda', model: 'Civic'},
            {make: 'Honda', model: 'Accord'},
            {make: 'Mazda', model: 'Miata'},
            {make: 'Toyota', model: 'Corolla'},
            {make: 'Toyota', model: 'Camry'}
        ];
    })
;