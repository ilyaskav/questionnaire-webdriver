/*global Slider, getSprintCodeQuaility, getQuestionRating, showSprintStatus, getKPI */
'use strict';
angular.module('questionnaire')
    .controller('QuestionnaireController', ['$scope', '$http',
        function($scope, $http) {
            $scope.formData = {};
            $scope.error = null;
            $scope.submitted = false;
            $scope.slider = new Slider('#codeQuality', {
                min: 1,
                max: 10
            });

            function validate() {
                $scope.error = null;

                if (!$scope.questionnaireForm.$valid) {

                    if ($scope.questionnaireForm.$error.required) {
                        $scope.error = 'Fill out all fields';
                        return false;
                    }

                    if ($scope.questionnaireForm.$error.number) {
                        $scope.error = 'Length of sprint should be a number';
                        return false;
                    }

                    if (typeof $scope.formData.codeQuality === 'number' &&
                        $scope.formData.codeQuality > 0 &&
                        $scope.formData.codeQuality <= 10) {

                        $scope.error = 'Code quality should be in range 1-10';
                        return false;
                    }
                }
                return true;
            }

            $scope.submit = function() {
                $scope.submitted = true;
                $scope.formData.codeQuality = $scope.slider.getValue();

                if (!validate()) return;

                var sprintCodeQuality = getSprintCodeQuaility($scope.formData.codeQuality, $scope.formData.lengthOfSprint);
                var questionRating = getQuestionRating(sprintCodeQuality, getKPI($scope.formData.bestDev));

                showSprintStatus(questionRating, '#sprintStatus');

                $http.post('api/submitForm', $scope.formData)
                    .then(function() {
                        $('.alert-success').show();
                        $scope.formData = {};
                        $scope.submitted = false;                        
                    },
                    function() {
                        $('.alert-danger').show();
                        console.log('Error sending the form');
                    });
            };

            $scope.clear = function (){
                $scope.submitted = false;
                $scope.error = null;
            };
        }]);