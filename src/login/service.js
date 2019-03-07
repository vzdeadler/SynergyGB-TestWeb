(function(){

    'use strict';

    var service = angular.module('login_services', []);

    service.service('login_services', ['$http', function($http){

        var self = this;

        this.types = ['V', 'E', 'P'];
        this.urlLogin = 'https://prueba-admision-web.herokuapp.com/session';

        //Returning types.
        this.getTypes = function(){
            return self.types;
        };

        //Login service.
        this.login = function(data){
            return $http({
                url: self.urlLogin,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: {
                    username: data.username,
                    password: data.password,
                    type: data.type
                }
            });
        };

    }]);

})();