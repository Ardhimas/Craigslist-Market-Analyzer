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
        $rootScope.cityList = [
            {link:'abilene', name: 'Abilene'},
            {link:'amarillo', name: 'Amarillo'},
            {link:'austin', name: 'Austin'},
            {link:'beaumont', name: 'Beaumont / Port Arthur'},
            {link:'brownsville', name: 'Brownsville'},
            {link:'collegestation', name: 'College Station'},
            {link:'corpuschristi', name: 'Corpus Christi'},
            {link:'dallas', name: 'Dallas / Fort Worth'},
            {link:'nacogdoches', name: 'Nacogdoches/Deep East Texas'},
            {link:'delrio', name: 'Del Rio / Eagle Pass'},
            {link:'elpaso', name: 'El Paso'},
            {link:'galveston', name: 'Galveston'},
            {link:'houston', name: 'Houston'},
            {link:'killeen', name: 'Killeen'},
            {link:'laredo', name: 'Laredo'},
            {link:'lubbock', name: 'Lubbock'},
            {link:'mcallen', name: 'McAllen'},
            {link:'odessa', name: 'Odessa'},
            {link:'sanangelo', name: 'San Angelo'},
            {link:'sanantonio', name: 'San Antonio'},
            {link:'sanmarcos', name: 'San Marcos'}, 
            {link:'bigbend', name: 'Big Bend / Southwest Texas'},
            {link:'texarkana', name: 'Texarkana'},
            {link:'texoma', name: 'Texoma'},
            {link:'easttexas', name: 'Tyler / East Texas'},
            {link:'victoriatx', name: 'Victoria'},
            {link:'waco', name: 'Waco'},
            {link:'wichitafalls', name: 'Wichita Falls'}];
    })
;