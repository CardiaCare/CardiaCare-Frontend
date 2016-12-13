/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){

  angular
    .module('app')
    .controller('BiosignalsController', [
      BiosignalsController
    ]);

  function BiosignalsController() {
    var vm = this;

    vm.bloodpressure = [
        {
            name: 'Ivan',
            systolic:'120',
            diastolic:'80',
            created_at:'12.12.2016'

        }
    ];
  }

})();
