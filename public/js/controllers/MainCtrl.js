// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {

    $scope.tagline = 'A project in development by Ardhimas Kamdani';   
    
    angular.element.fn.scrollView = function () {
        return this.each(function () {
            angular.element('html, body').animate({
                scrollTop: angular.element(this).offset().top
            }, 1000);
        });
    };
    
    $scope.scroll = function(string) {
        angular.element(string).scrollView();
    }

});