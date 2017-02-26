angular.module('app.controllers', [
    'app.service'
])

    .controller('HomeCtrl', ['$scope','Service',
        function ($scope,Service) {
            $scope.data = Service.get();
        }])

