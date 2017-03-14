(function () {
    'use strict'

    angular.module('angularMaterialCardiaCare')
        .config(function (RestangularProvider) {
            RestangularProvider.setBaseUrl('https://api.cardiacare.ru');
        });
})();