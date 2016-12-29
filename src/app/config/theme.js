(function () {
    'use strict'

    angular.module('angularMaterialCardiaCare')
        .config(function ($mdThemingProvider, $mdIconProvider) {
            $mdThemingProvider
                .theme('default')
                .primaryPalette('grey', {
                    'default': '600'
                })
                .accentPalette('teal', {
                    'default': '500'
                })
                .warnPalette('defaultPrimary');

            $mdThemingProvider.theme('default')
                .primaryPalette('defaultPrimary');

            $mdThemingProvider.theme('green', 'default')
                .primaryPalette('green');

            $mdThemingProvider.theme('custom', 'default')
                .primaryPalette('defaultPrimary', {
                    'hue-1': '50'
                });

            $mdThemingProvider.definePalette('defaultPrimary', {
                '50': '#FFFFFF',
                '100': 'rgb(181, 236, 242)',
                '200': '#0097A7',
                '300': '#0097A7',
                '400': '#0097A7',
                '500': '#0097A7',
                '600': '#0097A7',
                '700': '#0097A7',
                '800': '#0097A7',
                '900': '#0097A7',
                'A100': '#0097A7',
                'A200': '#0097A7',
                'A400': '#0097A7',
                'A700': '#0097A7'
            });

            $mdIconProvider
                .iconSet('email', 'assets/images/box.svg', 24)
                .iconSet('user', 'assets/images/user.svg', 64)
                .iconSet('message', 'assets/images/comment.svg', 24);
        });
})();