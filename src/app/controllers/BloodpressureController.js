(function(){

  angular
    .module('app')
    .controller('BloodpressureController', ['$scope','$stateParams','Restangular',
      BloodpressureController
    ]);

    function BloodpressureController($scope, $stateParams, Restangular) {

        $scope.labels = [];
        $scope.systolic = [];
        $scope.diastolic = [];
        $scope.data = [[], []];

        Restangular.one('patients', $stateParams.userId)
                .all('bloodpressure')
                .getList()
                .then(function (response) {
                    $scope.bloodpressure = response.data;
                });

        $scope.$watch("bloodpressure", function() {
            var i = 0;
            angular.forEach($scope.bloodpressure, function (bloodpressure) {
                $scope.labels.push(i);
                i++;
                $scope.systolic.push(bloodpressure.systolic);
                $scope.diastolic.push(bloodpressure.diastolic);
                $scope.data = [$scope.systolic, $scope.diastolic];
            });
        });

        $scope.colors = ['#763a7a', '#0288ad', '#ff8e72'];
        $scope.datasetOverride = [
            {
                label: "Line chart",
                type: 'line'
            },
            {
                label: "Line chart",
                type: 'line'
            }];
        
        
        
                $scope.options = {
            elements: {
                line: {
                    fill: true,
                    tension: 0,
                    borderWidth: 2
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
                        display: true
                    }],
                gridLines: {
                    display: true
                }
            },
            tooltips: {
                enabled: true
            }

        };
                
                
                
  }
})();



