// public/js/controllers/AnalyzerCtrl.js
angular.module('AnalyzerCtrl', []).controller('AnalyzerController', function($scope) {

    $scope.tagline = 'Price analyzer';
    
    $scope.sortType = 'date';
    $scope.sortReverse = false;

});