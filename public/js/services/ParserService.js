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
                angular.element(data).find('#titletextonly').each(function(){
                    var tempTitle = angular.element(this).text();
                    var tempPrice = angular.element(this).parent().siblings('span.price').text();
                    listings.push({title: tempTitle, price: tempPrice});
                })
                callback(listings);
            });
            
        }
    };

}]);