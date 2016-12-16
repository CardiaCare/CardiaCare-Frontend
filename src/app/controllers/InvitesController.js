(function(){

  angular
    .module('app')
    .controller('InvitesController', [
                InvitesController
            ]);

    function InvitesController() {
        var vm = this;
        vm.userState = '';
        vm.role = [
            {
                name: "Doctor"
            },
            {
                name: "Patient"
            }

        ];
    }

})();