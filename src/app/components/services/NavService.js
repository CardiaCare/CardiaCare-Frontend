(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Biosignals',
        icon: 'dashboard',
        sref: '.biosignals'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      }
      ,
      {
        name: 'Login',
        icon: 'person',
        sref: '.login'
      },
      {
        name: 'Servey',
        icon: 'person',
        sref: '.servey'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
