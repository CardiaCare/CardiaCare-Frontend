(function () {

    angular
            .module('app')
            .controller('InvitesController', ['$mdDialog', '$scope', '$mdToast', 'Restangular',
                InvitesController
            ]);

    function InvitesController($mdDialog, $scope, $mdToast, Restangular) {
        var vm = this;

        vm.invite = {
            role: '',
            email: ''
        }

        vm.role = [
            {name: "patient"},
            {name: "doctor"},
            {name: "volunteer"},
            {name: "chief"}];

//        $scope.invites = [
//            {
//                email: "a@a"
//            },
//            {
//                email: "b@b"
//            }
//        ];

        vm.invitePerson = function () {
            //TODO: check empty
            
            var invites = Restangular.all('invites');
            return invites.post(vm.invite).then(function (response) {
                $scope.showSimpleToast("Done!");
                vm.invite = {};
            }, function (response) {
                //TODO array of errors
                $scope.showSimpleToast(response.data.errors.email);
                console.log(response);
            });
            

        };
        
        vm.showSimpleToast = function (text) {
            $mdToast.show(
                    $mdToast.simple()
                    .textContent(text)
                    .position('top right')
                    .hideDelay(3000)
                    );
        };

        vm.showInvites = function (ev) {
            
            $mdDialog.show({
                controller: InviteDialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
            
            function InviteDialogController($scope, $mdDialog) {
                Restangular.all('invites').getList().then(function (response) {
                    $scope.invites = response;
                });
                $scope.hide = function () {
                    $mdDialog.hide();
                };

                $scope.cancel = function () {
                    $mdDialog.cancel();
                };

                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };

                $scope.deleteInvite = function (item) {
                    item.remove().then(function() {
                        $scope.invites.splice($scope.invites.indexOf(item), 1);
                    }, function(error){
                        if (error.status == 409){
                            vm.showSimpleToast(""+error.data.message);
                        }
                    });

                };
            }
            ;
        };


    }
})();