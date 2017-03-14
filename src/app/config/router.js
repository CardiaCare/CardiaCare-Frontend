(function () {
    'use strict'

    angular.module('angularMaterialCardiaCare')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('', '/home/main').when('/', '/home/main').otherwise('/404');
            $stateProvider
                .state('home', {
                    url: '',
                    templateUrl: 'app/views/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm',
                    abstract: true
                })
                .state('home.main', {
                    url: '/home/main',
                    resolve: {
                        data: function ($q, $state, $timeout, AuthService) {
                            var deferred = $q.defer();
                            var user = AuthService.getUser();
                            $timeout(function () {
                                if (user.role == 'doctor' || user.role == 'chief') {
                                    $state.go('home.account');
                                    deferred.resolve();
                                } else if(user.role == 'patient'){
                                    $state.go('home.profile',{userId: user.person.id});
                                    deferred.resolve();
                                } else {
                                    $state.go('home.login');
                                    deferred.reject();
                                }
                            });

                            return deferred.promise;
                        }
                    }
                })
                .state('home.profile', {
                    url: '/profile/:userId',
                    templateUrl: 'app/views/patient-profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm'
                })
                .state('home.biosignals', {
                    url: '/profile/:userId/biosignals',
                    templateUrl: 'app/views/patient-dashboard.html',
                    controller: 'BiosignalsController',
                    controllerAs: 'vm'
                })
                .state('home.account', {
                    url: '/account',
                    templateUrl: 'app/views/doctor-profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm'
                })
                .state('home.doctor-dashboard', {
                    url: '/doctor',
                    templateUrl: 'app/views/doctor-dashboard.html',
                    resolve: {
                        data: function ($q, $state, $timeout, AuthService) {
                            var deferred = $q.defer();
                            var user = AuthService.getUser();
                            $timeout(function () {
                                if (user.role == 'doctor' || user.role == 'chief') {
                                    deferred.resolve();
                                } else {
                                    $state.go('403');
                                    deferred.reject();
                                }
                            });

                            return deferred.promise;
                        }
                    }
                })
                .state('home.registration', {
                    url: '/registration',
                    templateUrl: 'app/views/registration.html',
                    controller: 'RegistrationController'
                })
                .state('home.recovery', {
                    url: '/recovery/:userEmail',
                    templateUrl: 'app/views/recovery.html',
                    controllerAs: 'vm'
                })
                .state('home.login', {
                    url: '/login',
                    templateUrl: 'app/views/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    resolve: {
                        data: function ($q, $state, $timeout, AuthService) {
                            var deferred = $q.defer();
                            $timeout(function () {
                                if (!AuthService.isAuthorized()) {
                                    deferred.resolve();
                                } else {
                                    $state.go('home.main');
                                    deferred.reject();
                                }
                            });

                            return deferred.promise;
                        }
                    }
                })
                .state('home.index', {
                    url: '/index',
                    templateUrl: 'app/views/index.html',
                    controller: 'IndexController',
                    controllerAs: 'vm'
                })
                .state('403', {
                    url: '/403',
                    templateUrl: 'app/views/403.html',
                    controller: 'MainController'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: 'app/views/404.html',
                    controller: 'MainController'
                });
        });
})();