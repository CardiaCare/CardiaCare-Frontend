'use strict';

angular.module('angularMaterialCardiaCare',
                [
                    'app',
                    'ngAnimate',
                    'ngCookies',
                    'ngTouch',
                    'ngSanitize',
                    'ui.router',
                    'ngMaterial',
                    'nvd3',
                    'base64',
                    'restangular'
                ])
    .config(function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    })
    .run(function ($rootScope, $location, $state, AuthService) {
        /*
         * Redirect to login page when user is not authorized
         */
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var isLogin = toState.name === "home.login";
            if (isLogin) {
                return;
            }
            if (!AuthService.isAuthorized()) {
                event.preventDefault();
                $state.go('home.login');
            }
        });
    });
