(function(){

    angular
            .module('app')
            .controller('EcgController', ['$scope', '$stateParams', 'Restangular', '$mdToast', 'AuthService', 'AUTH_EVENTS',
                EcgController
            ]);

    function EcgController($scope, $stateParams, Restangular, $mdToast, AuthService, AUTH_EVENTS) {

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];

        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40]
        ];
        
        $scope.options = {
            scales: {
                xAxes: [{
                        display: true
                    }]
            }
        };


        $scope.datasetOverride = [
            {
                type: 'line'
            }
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }

})();

