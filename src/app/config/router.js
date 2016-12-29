(function () {
    'use strict'

    angular.module('angularMaterialCardiaCare')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '',
                    templateUrl: 'app/views/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm',
                    abstract: true
                })
                .state('home.profile', {
                    url: '/profile/:userId',
                    templateUrl: 'app/views/profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm',
                    data: {
                        title: 'Profile'
                    }
                })
                .state('home.biosignals', {
                    url: '/profile/:userId/biosignals',
                    templateUrl: 'app/views/biosignals.html',
                    controller: 'BiosignalsController',
                    controllerAs: 'vm',
                    data: {
                        title: 'Biosignals'
                    }
                })
                .state('home.servey', {
                    url: '/servey',
                    templateUrl: 'app/views/servey-designer.html',
                    controller: 'ServeyDesignerController',
                    controllerAs: 'vm',
                    data: {
                        title: 'Servey'
                    }
                })
                .state('home.doctor-dashboard', {
                    url: '/doctor',
                    templateUrl: 'app/views/doctor-dashboard.html',
                    data: {
                        title: 'Doctor Dashboard'
                    }
                })
                .state('home.registration', {
                    url: '/registration',
                    templateUrl: 'app/views/registration.html',
                    data: {
                        title: 'Registration'
                    }
                })
                .state('home.login', {
                    url: '/login',
                    templateUrl: 'app/views/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    data: {
                        title: 'Login'
                    }
                })
            ;

            $urlRouterProvider.otherwise('/login');
        });
})()