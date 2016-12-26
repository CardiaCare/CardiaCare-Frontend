(function(){

  angular
    .module('app')
    .controller('PasswordRecoveryController', ['HttpService',
      PasswordRecoveryController
    ]);

  function PasswordRecoveryController(HttpService) {
    var vm = this;

    vm.input = {
      curent: '',
      newpsw: '',
      confpsw: ''
    };
    
     vm.reset = function(){
        HttpService.postRecovery(vm.input.newpsw)
            .then(function () {
            });
    };
  }

})();
