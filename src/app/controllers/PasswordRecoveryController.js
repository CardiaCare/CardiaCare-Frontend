(function(){

  angular
    .module('app')
    .controller('PasswordRecoveryController', [
      PasswordRecoveryController
    ]);

  function PasswordRecoveryController() {
    var vm = this;

    vm.input = {
      curent: '12345',
      newpsw: '12346',

    };
    
    function reset(){
        
    };
  }

})();
