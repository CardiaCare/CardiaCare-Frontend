(function () {

    angular
        .module('app')
        .controller('MainController', [
            '$scope', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast', '$mdDialog','$translate', 'AuthService',
            MainController
        ]);

    function MainController($scope, $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast, $mdDialog, $translate, AuthService) {
        var vm = this;

        vm.selectItem = selectItem;
        vm.toggleItemsList = toggleItemsList;
        vm.showActions = showActions;
//        vm.title = $state.current.data.title;
        vm.showSimpleToast = showSimpleToast;
        vm.toggleRightSidebar = toggleRightSidebar;

        // INIT with Auth
       $scope.$watch(AuthService.isAuthorized, function (value, oldValue) {
           if(!value && oldValue) {
               $state.go('home.login');
           }
       }, true);
        // End Init with Auth

        //TODO translate.use is not a function
        $scope.language = $translate.use();
        //$scope.language = 'ru';
        
        function toggleRightSidebar() {
            $mdSidenav('right').toggle();
        }

        function toggleItemsList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function () {
                $mdSidenav('left').toggle();
            });
        }

        function selectItem(item) {
            vm.title = item.name;
            vm.toggleItemsList();
        }

        $scope.enLang = function () {
            $translate.use('en');
            $scope.language = $translate.use();
        };

        $scope.ruLang = function () {
            $translate.use('ru');
            $scope.language = $translate.use();
        };

        $scope.showConfirm = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Logout')
                .textContent('Are you sure you want to log out?')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('No');

            $mdDialog.show(confirm).then(function () {
                AuthService.logout();
            }, function () {
                
            });
        };

        $scope.logout = function (ev) {
            $scope.showConfirm(ev);
        };

        function DialogController($mdDialog) {
            this.hide = function () {
                $mdDialog.hide();
            };

            this.cancel = function () {
                $mdDialog.cancel();
            };

            this.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }

        function showActions($event) {
            $mdBottomSheet.show({
                parent: angular.element(document.getElementById('content')),
                templateUrl: 'app/views/partials/bottomSheet.html',
                controller: ['$mdBottomSheet', SheetController],
                controllerAs: "vm",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && $log.debug(clickedItem.name + ' clicked!');
            });

            function SheetController($mdBottomSheet) {
                var vm = this;

                vm.actions = [
                    {
                        name: 'Share',
                        icon: 'share',
                        url: 'https://twitter.com/intent/tweet?text=Angular%20Material%20Dashboard%20https://github.com/flatlogic/angular-material-dashboard%20via%20@flatlogicinc'
                    },
                    {
                        name: 'Star',
                        icon: 'star',
                        url: 'https://github.com/flatlogic/angular-material-dashboard/stargazers'
                    }
                ];

                vm.performAction = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }

        function showSimpleToast(title) {
            $mdToast.show(
                $mdToast.simple()
                    .content(title)
                    .hideDelay(2000)
                    .position('bottom right')
            );
        }
    }

})();
