'use strict';

angular.module('angularMaterialCardiaCare', ['ngAnimate', 'ngCookies', 'ngTouch',
  'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                    $mdIconProvider, $qProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.profile', {
        url: '/profile',
        templateUrl: 'app/views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm',
        data: {
          title: 'Profile'
        }
      })
      .state('home.biosignals', {
        url: '/biosignals',
        templateUrl: 'app/views/biosignals.html',
        controller: 'BiosignalsController',
        controllerAs: 'vm',
        data: {
          title: 'Biosignals'
        }
      })
      .state('home.doctor-dashboard', {
        url: '/doctor',
        templateUrl: 'app/views/doctor-dashboard.html',
        data: {
          title: 'Doctor Dashboard'
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

    $urlRouterProvider.otherwise('/profile');

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
      '50':  '#FFFFFF',
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

    
    $qProvider.errorOnUnhandledRejections(false);
    
  });
