'use strict';
angular.module('app')
    .directive('accessControl', ['AuthService', '$interval', function (AuthService, $interval) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var timeout;
                updateElement();
                timeout = $interval(function () {
                    updateElement(); // update DOM
                }, 1000);

                function updateElement() {
                    if (attr.accessControl == 'authorized-only') {
                        if (!AuthService.isAuthorized()) {
                            element.hide();
                        } else {
                            element.show();
                        }
                    } else if (attr.accessControl == 'not-authorized-only') {
                        if (AuthService.isAuthorized()) {
                            element.hide();
                        } else {
                            element.show();
                        }
                    }
                }
            }
        };
    }]);
