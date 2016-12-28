(function(){

  angular
    .module('app')
    .controller('BloodpressureController', ['HttpService', '$stateParams',
      BloodpressureController
    ]);

    function BloodpressureController(HttpService, $stateParams) {
        var vm = this;

        HttpService.getBloodpressureList($stateParams.userId)
                .then(function (bloodpressure) {
                    vm.bloodpressure = bloodpressure;
                });

//        vm.bloodpressure = [
//            {
//                name: 'Ivan',
//                systolic: '120',
//                diastolic: '80',
//                created_at: '12.12.2016'
//
//            },
//        {
//            name: 'Ivan',
//            systolic:'135',
//            diastolic:'95',
//            created_at:'12.12.2016'
//
//        }
//    ];
  }

})();



