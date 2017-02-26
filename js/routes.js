angular.module('app.routes', ['ui.router'])


    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('home', {
                name: 'home',
                url: '/home',
                templateUrl: 'templates/home/home.html',
                controller: 'HomeCtrl'
            });


        $urlRouterProvider.otherwise('/home')


    });
