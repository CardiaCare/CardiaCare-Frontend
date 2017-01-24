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
        //$scope.series = ['Series A', 'Series B'];


    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55],
//bar            [0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 55, 0, 0, 0, 30, 0, 0, 0, 0, 58, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 59, 0, 0, 0, 0, 0]

        [{
            x: 5,
            y: 56,
            r: 5
        },
        {
            x: 23,
            y: 56,
            r: 5
        }]
    ];

        $scope.datasetOverride = [
            {
                label: "Line chart",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                type: 'line'
            },
            {
                label: "Bubble chart",
                type: 'bubble'
            }
            
//bar            {
//                label: "Bar chart",
//                borderWidth: 1,
//                type: 'bar'
//            }
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
//                            max: 1,
//                            min: 42,
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
                enabled: true
            }

        };

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }

})();

