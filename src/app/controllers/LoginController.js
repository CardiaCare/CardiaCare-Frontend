(function(){

  angular
    .module('app')
    .controller('LoginController', [
      LoginController
    ]);

  function LoginController() {
    var vm = this;

    vm.login = {
      email: 'contact@cardiacare.ru',
      password: 'Petr',
    };
  }

})();
