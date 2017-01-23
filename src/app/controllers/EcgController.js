(function(){

    angular
            .module('app')
            .controller('EcgController', ['$scope', '$stateParams',  '$http','Restangular', '$mdToast', 'AuthService', 'AUTH_EVENTS',
                EcgController
            ]);

    function EcgController($scope, $stateParams,  $http,Restangular, $mdToast, AuthService, AUTH_EVENTS) {

        $scope.labels =[65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55];

//        $http.get('../../asserts/data.json').success(function (data) {
//            console.log(data);
//            $scope.data = data;
//        });
                
        $scope.data = [   
            [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55]
        ];

        $scope.datasetOverride = [
            {
                label: "Line chart",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                type: 'line'
            }
        ];

        $scope.options = {
            elements: {
                line: {
                    fill: false,
                    tension : 0 ,
                    borderWidth: 0.5
                },
                point: {
                    radius: 0.5
                }
            },
            scales: {
                
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: true
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

