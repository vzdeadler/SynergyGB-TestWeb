(function(){

    'use strict';

    var service = angular.module('home_services', []);

    service.service('home_services', ['$http', function($http){

        var self = this;

        this.urlLogin = 'https://prueba-admision-web.herokuapp.com/data?cid=';

        this.get_data = function(data){
            return $http({
                url: self.urlLogin + data.cid,
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
        };

    }]);

})();