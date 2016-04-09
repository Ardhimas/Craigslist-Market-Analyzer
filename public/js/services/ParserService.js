// public/js/services/ParserService.js
angular.module('ParserService', []).factory('Parser', [ function() {
    
    // prefilter enables cross origin get request
    angular.element.ajaxPrefilter( function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        // options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        options.url = http + '//cors-anywhere-ardhimas.c9users.io/' + options.url;
        // options.url = http +'//cors.corsproxy.io/url=' + options.url;
      }
    });
    
    return {
        // call to grab a page given make and model
        get : function(link, make, model, callback) {
            // angular.element refers to jQuery
            angular.element.get('http://' + link + '.craigslist.org/search/cto?auto_make_model=' + make + '+' + model, function(data) {
                var listings = [];
                var totalCount = parseInt(angular.element(data).find('span.button.pagenum > span.totalcount').first().text());
                var promises = [];
                var extraPages = (totalCount > 100) ? Math.floor((totalCount - 1)/100) : 0;
                for(extraPages; extraPages>=0; extraPages--) {
                    // alert(extraPages);
                    promises.push(angular.element.get('http://austin.craigslist.org/search/cto?s= ' + extraPages*100 + '&auto_make_model=' + make + '%20' + model, function(data) {
                        angular.element(data).find('span.txt').each(function(){
                            var tempTitle = angular.element(this).find('#titletextonly').text();
                            var tempPrice = parseInt(angular.element(this).find('span.price').text().slice(1));
                            var tempId = parseInt(angular.element(this).find('a').attr('href').slice(5,15));
                            var tempDate = angular.element(this).find('time').attr('datetime');
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
                                if (tempYear < 1950 || tempYear > 2020){
                                    // Invalidate bad years
                                    tempYear = 0;
                                }
                            }
                            if (tempPrice >= 1000 && tempYear > 0 && tempId > 1){
                                listings.push({title: tempTitle, make: make, model: model, price: tempPrice, year: tempYear, carID: tempId, date: tempDate});
                                // alert("pushed" +tempTitle);
                            }
                        });
                    }));
                }
                Promise.all(promises).then(function() {
                    // alert("callback");
                    callback(listings);
                });
                
            });
            
        }
        
    };

}]);