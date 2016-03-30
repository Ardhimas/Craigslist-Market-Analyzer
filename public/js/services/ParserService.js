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
            angular.element.get('http://austin.craigslist.org/search/cto?auto_make_model=toyota+corolla', function(data) {
                // dfd.resolve();
                // value = 'test';
                alert('worked');
                callback(angular.element(data).find('#titletextonly').text());
            });
            
        }
    };

}]);