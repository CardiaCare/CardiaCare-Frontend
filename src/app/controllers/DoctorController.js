(function(){

  angular
    .module('app')
    .controller('DoctorController', [
      DoctorController
    ]);

  function DoctorController() {
    var vm = this;

    vm.doctor = {
      email: 'contact@cardiacare.ru',
      name: 'Petr',
      patronymic: 'Petrovich' ,
      surname: 'Petrov' ,
      organization:'State Hospital'
    };
  }

})();

