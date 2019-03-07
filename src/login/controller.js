(function(){

    'use strict';

    var login = angular.module('login', ['login_services']);

    login.controller('login_ctrl', ['$scope', '$location', '$window', 'login_services', function($scope, $location, $window, login_services){

        var self = this;

        this.types = login_services.getTypes();                        //Get all the types from services.
        this.toggled = false;                                   //Dropdown value for toggling.
        this.modalField = undefined;                            //Modal empty field.
        
        //User info.
        this.user = {
            type: 'Seleccione...',
            username: undefined,
            password: undefined
        };     

        //Alert function.
        this.alert = function(){
            $window.alert('Recuperar contraseña.');
        };

        //Setting user type.
        this.setType = function(type){
            self.user.type = type;
            self.toggle();
        };

        //Toggle the dropdown.
        this.toggle = function(){
            console.log('toggling');
            self.toggled = !self.toggled;
        }

        //Login controller function.
        this.checkFields = function(){
            if(self.user.type == 'Seleccione...'){
                self.modalField = 'Tipo';
                self.modal();
            }else if(!self.user.username){
                self.modalField = 'Usuario';
                self.modal();
            }else if(!self.user.password){
                self.modalField = 'Contraseña';
                self.modal();
            }else{
                self.login();
            }
        }

        //Login controller function.
        this.login = function(){
            login_services.login(self.user)
                .then(function success(res){
                    console.log(res);
                    $location.path('/home/' + res.data.cid);
                }, function error(err){
                    console.log(err);
                });
        };

        //Modal function.
        this.modal = function(){
            $('#loginModal').modal('show');
        };

    }]);

})();