'use strict';
angular.module('app')
    .directive('accessControl', ['AuthService', '$interval', function (AuthService, $interval) {
        return {
            restrict: 'A',
            scope: {
                accessControl: '='
            },
            link: function (scope, element, attr) {
                var timeout;

                function updateElement() {
                    if (scope.accessControl == 'authorized') {
                        if (!AuthService.isAuthorized()) {
                            element.css({
                                display: 'none'
                            });
                        }
                    } else if (scope.accessControl == 'not-authorized') {
                        if (AuthService.isAuthorized()) {
                            element.css({
                                display: 'none'
                            });
                        }
                    }
                    console.log(scope.accessControl);
                }

                timeout = $interval(function () {
                    updateElement(); // update DOM
                }, 1000);
            }
        };
    }]);
