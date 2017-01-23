(function(){

    angular
            .module('app')
            .controller('EcgController', ['$scope', '$stateParams',  '$http','Restangular', '$mdToast', 'AuthService', 'AUTH_EVENTS',
                EcgController
            ]);

    function EcgController($scope, $stateParams,  $http,Restangular, $mdToast, AuthService, AUTH_EVENTS) {

        $scope.labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];
        $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
//        $http.get('../../asserts/data.json').success(function (data) {
//            console.log(data);
//            $scope.data = data;
//        });

//                
        $scope.series = ['Series A', 'Series B'];


        $scope.data = [   
            [0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 56, 0, 0, 0, 81, 0, 0, 0, 0, 81, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 55, 0, 0, 0, 0, 55, 0, 0, 0, 0, 0],
            [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55]

        ];

        $scope.datasetOverride = [
            {
                label: "Bar chart",
                borderWidth: 1,
                type: 'bar'
            },
            {
                label: "Line chart",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                type: 'line'
            }
        ];

        $scope.options = {
            elements: {
                line: {
                    fill: false,
                    tension: 0,
                    borderWidth: 2
                },
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                        display: false
//                        ticks: {
//                            max: 85,
//                            min: 39,
//                            stepSize: 1
//                        }
                    }],
                yAxes: [{
                        display: true,
                        ticks: {
                            max: 85,
                            min: 39,
                            stepSize: 1
                        }
                    }],
                gridLines: {
                    display: true
                }
            },
            tooltips: {
                enabled: false
            }

        };

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }

})();

