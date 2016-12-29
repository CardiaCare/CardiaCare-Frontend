(function(){

  angular
    .module('app')
    .controller('BloodpressureController', ['$scope','$stateParams','Restangular',
      BloodpressureController
    ]);

    function BloodpressureController($scope, $stateParams, Restangular) {

        Restangular.one('patients', $stateParams.userId)
                .all('bloodpressure')
                .getList()
                .then(function (response) {
                    $scope.bloodpressure = response;
                });
  }

})();



