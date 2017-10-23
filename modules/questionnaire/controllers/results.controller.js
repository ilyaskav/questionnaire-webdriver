'use strict';

angular.module('questionnaire')
    .controller('ResultsController', ['$scope', '$http',
        function($scope, $http) {
            $scope.answers = [];
            $scope.pagination = {};

            $scope.getAnswers = function(page) {
                $http.get('api/results', { params: { page: page } }).then(function(response) {
                    response.data.answers.forEach(function(el) { el.created = moment(el.created).format('MMMM Do YYYY, h:mm:ss a'); });
                    $scope.answers = response.data.answers;
                    $scope.pagination = response.data.pagination;
                }, function() {
                    console.log('cannot get answers');
                });
            };

            $scope.next = function() {
                if ($scope.pagination.page < $scope.pagination.pagesTotal) {
                    $scope.getAnswers($scope.pagination.page + 1);
                }
            };

            $scope.prev = function() {
                if ($scope.pagination.page > 1) {
                    $scope.getAnswers($scope.pagination.page - 1);
                }
            };

            $scope.getAnswers();
        }]);