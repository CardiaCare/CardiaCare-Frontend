(function(){

  angular
    .module('app')
    .controller('BiosignalsController', [ '$stateParams',
      BiosignalsController
    ]);

  function BiosignalsController($stateParams) {
    var vm = this;
    //FIXME
    vm.menuItems = [
      {
        name: 'Profile',
        icon: 'person',
        sref: 'home.profile({userId: ' + $stateParams.userId + '})'
      },
      {
        name: 'Biosignals',
        icon: 'dashboard',
        sref: 'home.biosignals({userId:' + $stateParams.userId + '})'
      }
    ];

  }

})();
