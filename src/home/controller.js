(function(){

    'use strict';

    var home = angular.module('home', ['home_services']);

    home.controller('home_ctrl', ['$scope', '$routeParams', 'home_services', function($scope, $routeParams, home_services){

        var self = this;
        
        this.data = {
            cid: $routeParams.CID
        }; 

        this.homeData = undefined;

        home_services.get_data(self.data)
            .then(function success(res){
                console.log(res);
                self.homeData = res.data;
            }, function error(err){
                console.log(err);
            });

        this.getRandomHour = function(){
            return Math.floor((Math.random()*7)+1);
        };

    }]);

})();