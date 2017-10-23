'use strict';

angular.module('questionnaire')
    .controller('MainController', ['$scope', '$location',
        function($scope, $location) {
            $scope.isActive = function(path){
                return path === $location.path();
            };
        }]);