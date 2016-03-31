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
                // dfd.resolve();
                // value = 'test';
                // alert(make + '+' + model);
                // #searchform > div.content > p:nth-child(2) > span > span.l2 > span.price
                //*[@id="searchform"]/div[4]/p[1]/span/span[3]/span[1]
                //*[@id="titletextonly"]
                var listings = [];
                angular.element(data).find('span.txt').each(function(){
                    var tempTitle = angular.element(this).find('#titletextonly').text();
                    var tempPrice = parseInt(angular.element(this).find('span.price').text().slice(1));
                    var tempYear = tempTitle.match(/(^|\D)(\d{4}|\d{2})(\D|$)/);
                    if (tempYear != null) {
                        tempYear = parseInt(tempYear[2]);
                    }
                    if (tempYear < 100) {
                        if(tempYear > 50){
                            tempYear += 1900;
                        }else {
                            tempYear += 2000;
                        }
                    }
                    if (tempPrice >= 1000 && tempYear > 0){
                        listings.push({title: tempTitle, price: tempPrice, year: tempYear});
                    }
                });
                callback(listings);
            });
            
        }
    };

}]);