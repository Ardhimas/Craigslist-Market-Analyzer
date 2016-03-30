// public/js/services/ParserService.js
angular.module('ParserService', []).factory('Parser', [ function() {
    
    
    return {
        // call to grab a page given make and model
        get : function(make, model, callback) {
            // angular.element refers to jQuery
            // dfd = angular.element.Deferred();
            // // var value = 'helloeee';
            // dfd.done(function(){
            //     // alert('wtf');
            //     dfd = 'a';
            // });
            // return value;
            // return angular.element('<span id="titletextonly">1986 HONDA CRX SI CLASSIC 141K ORIGINAL MILES CLEAN</span>').text();
            //angular.element.get('http://austin.craigslist.org/search/cto?auto_make_model=honda+civic', function(data) {//' + make + '+' + model
            // return angular.element.get('https://craigslist-market-analyzer-ardhimas.c9users.io/');//' + make + '+' + model
            
            angular.element.get('https://craigslist-market-analyzer-ardhimas.c9users.io/parser', function(data) {//' + make + '+' + model
                // dfd.resolve();
                // value = 'test';
                // alert('worked');
                callback('wtf');
            });
            // return angular.element.ajax({
            //     url:'https://craigslist-market-analyzer-ardhimas.c9users.io/',
            //     type: 'GET',
            //     cache: false,
            //     data: {
                    
            //     }
            // })
            // .done(function() {
            //     alert( "second success" );
            //   })
            //   .fail(function() {
            //     alert( "error" );
            //   })
            //   .always(function() {
            //     alert( "finished" );
            //   });
            // return value;
            //return make + ' ' + model;
            // console.log(log);
            // return $http.get();
        }
    };

}]);