// public/js/controllers/CarCtrl.js
angular.module('CarCtrl', []).controller('CarController', function($scope, $rootScope, Car) {

    $scope.tagline = 'Data retrieved from MongoDB database hosted on mLab';
    $scope.currentPage = 1;
    $scope.numPerPage = 20;
    $scope.numOfPages = 1;
    $scope.selectedIndex = 0;
      
    $scope.paginate = function(value) {
        $scope.totalItems = $scope.carData.length;
        var begin, end, index;
        begin = ($scope.currentPage - 1) * $scope.numPerPage;
        end = begin + $scope.numPerPage;
        index = $scope.carData.indexOf(value);
        $scope.pageList = new Array($scope.numOfPages);
        return (begin <= index && index < end);
    };
    // $scope.getNumber = function(num){
    //     var tempArray= new Array(num);
    //     // console.log($scope.currentPage)
    //     return tempArray;
    // };
    $scope.setActive = function(item, list){
        // list.some(function(item){
        //     if(item.active){
        //       return item.active = false;
        //     }
        // });
        // item.active = true;
    };
    $scope.setPage = function(page){
        $scope.currentPage = page + 1;
        $scope.selectedIndex = page;
    }
    $scope.removeCar = function(car) {
        $scope.carData.splice($scope.carData.indexOf(car), 1);
        Car.delete(car.carID);
    };
    
    Car.getAll().success(function(data){
        $scope.carData = data;
        $scope.numOfPages = Math.ceil($scope.carData.length/$scope.numPerPage);
    });
    $scope.sortType = 'date';
    $scope.sortReverse = true;
    $scope.car = {};
    $scope.city = {};
});