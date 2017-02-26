angular.module('app.service', [])
    .factory('Service', function () {
        //public
        var service = {
            get:get
        };

        //private
        var data = {
            name:"World"
        };

        function get() {
            return data;
        }

        return service;
    });