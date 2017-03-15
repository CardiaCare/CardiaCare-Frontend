(function () {
    'use strict'

    angular.module('angularMaterialCardiaCare')
        .config(function (RestangularProvider) {
            RestangularProvider.setBaseUrl('http://api.cardiacare.ru');
        });
})();