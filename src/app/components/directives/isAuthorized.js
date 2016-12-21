'use strict';
angular.module('app')
    .directive('is-authorized', function () {
        return {
            restrict: 'A',
            replace: true,
            link: function (scope, element, attr) {
                element.css({
                    display: 'none'
                });
            }
        };
    });

