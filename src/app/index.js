"use strict";


angular.module("angularMaterialCardiaCare",
                [
                    "app",
                    "ngAnimate",
                    "ngCookies",
                    "ngSanitize",
                    "ui.router",
                    "ngMaterial",
                    "nvd3",
                    "base64",
                    "restangular",
                    "pascalprecht.translate",
                    "chart.js",
                    "materialCalendar"
                    
                ])
    .config(["$qProvider", function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])
    .run(function ($rootScope, $location, $state, AuthService) {
        /*
         * Redirect to login page when user is not authorized
         */

        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
            var isLogin = false;
            if(toState.name === "home.login" 
                    || toState.name === "home.recovery"
                    || toState.name === "home.registration"
                    || toState.name === "home.index")
            {
                isLogin = true;
            }
            if(isLogin){
                return;
            }
            if (!AuthService.isAuthorized()) {
                event.preventDefault();
                $state.go("home.login");
            }
        });
    });
