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
                updateElement();
                timeout = $interval(function () {
                    updateElement(); // update DOM
                }, 1000);

                function updateElement() {
                    if (attr.accessControl == 'authorized') {
                        if (!AuthService.isAuthorized()) {
                            element.addClass('not-authorized');
                        } else {
                            element.removeClass('not-authorized');
                        }
                    } else if (attr.accessControl == 'not-authorized') {
                        if (AuthService.isAuthorized()) {
                            element.addClass('not-authorized');
                        } else {
                            element.removeClass('not-authorized');
                        }
                    }
                }
            }
        };
    }]);
