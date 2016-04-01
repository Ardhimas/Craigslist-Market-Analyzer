// public/js/services/ParserService.js
angular.module('ParserService', []).factory('Parser', [ function() {
    
    
    return {
        // call to grab a page given make and model
        get : function(make, model, callback) {
            // angular.element refers to jQuery
            // prefilter enables cross origin get request
            angular.element.ajaxPrefilter( function (options) {
              if (options.crossDomain && jQuery.support.cors) {
                var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
                //options.url = "http://cors.corsproxy.io/url=" + options.url;
              }
            });
            angular.element.get('http://austin.craigslist.org/search/cto?auto_make_model=' + make + '+' + model, function(data) {
            //angular.element.get('https://craigslist-market-analyzer-ardhimas.c9users.io/parser', function(data) {
                // alert(make + '+' + model);
                var listings = [];
                angular.element(data).find('span.txt').each(function(){
                    var tempTitle = angular.element(this).find('#titletextonly').text();
                    var tempPrice = parseInt(angular.element(this).find('span.price').text().slice(1));
                    var tempId = parseInt(angular.element(this).find('a').attr('href').slice(5,15));
                    var tempYear = tempTitle.match(/(^|\D)(\d{4}|\d{2})(\D|$)/);
                    if (tempYear != null) {
                        tempYear = parseInt(tempYear[2]);
                        if (tempYear < 100) {   
                            if(tempYear > 50){
                                tempYear += 1900;
                            } else {
                                tempYear += 2000;
                            }
                        }
                    }
                    if (tempPrice >= 1000 && tempYear > 0){
                        listings.push({title: tempTitle, price: tempPrice, year: tempYear, carID: tempId});
                    }
                });
                callback(listings);
            });
            
        }
    };

}]);