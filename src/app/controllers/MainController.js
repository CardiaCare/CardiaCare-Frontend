(function () {

    angular
        .module('app')
        .controller('MainController', [
            '$scope', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state',  '$cookies','$mdToast', '$mdDialog','$translate', 'AuthService',
            MainController
        ]);

    function MainController($scope, $mdSidenav, $mdBottomSheet, $log, $q, $state, $cookies, $mdToast, $mdDialog, $translate, AuthService) {
        var vm = this;

        vm.selectItem = selectItem;
        vm.toggleItemsList = toggleItemsList;
        vm.showActions = showActions;
//        vm.title = $state.current.data.title;
        vm.showSimpleToast = showSimpleToast;
        vm.toggleRightSidebar = toggleRightSidebar;

        // INIT with Auth
        $scope.$watch(AuthService.isAuthorized, function (value, oldValue) {
            if (!value && oldValue) {
                $state.go('home.login');
            }
        }, true);
        // End Init with Auth
        
        
        // INIT translation
        $scope.language = $cookies.get('language');
        $translate.use($scope.language);

        
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
            $cookies.put('language', 'en');
            $scope.language = $translate.use();
        };

        $scope.ruLang = function () {
            $translate.use('ru');
            $cookies.put('language', 'ru');
            $scope.language = $translate.use();
        };

        $scope.showConfirm = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title($translate.instant('LOGOUT'))
                .textContent($translate.instant('SURE_LOGOUT'))
                .ariaLabel($translate.instant('SURE_LOGOUT'))
                .targetEvent(ev)
                .ok($translate.instant('YES'))
                .cancel($translate.instant('NO'));

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
