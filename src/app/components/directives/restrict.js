'use strict';

angular.module('app')
    .directive('restrict', ['AuthService', function (AuthService) {
        return {
            restrict: 'A',
            prioriry: 100000,
            scope: false,
            link: function () {
                // alert('ergo sum!');
            },
            compile: function (element, attr, linker) {
                var accessDenied = true;
                var user = AuthService.getUser();

                var attributes = attr.access.split(" ");
                for (var a in attributes) {
                    if (user.role == attributes[a]) {
                        accessDenied = false;
                    }
                }
                if (accessDenied) {
                    element.children().remove();
                    element.remove();
                }
            }
        };
    }]);