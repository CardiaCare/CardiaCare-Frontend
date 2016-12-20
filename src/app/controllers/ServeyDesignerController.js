(function () {

    angular
            .module('app')
            .controller('ServeyDesignerController', [
                ServeyDesignerController
            ]);

    function ServeyDesignerController() {
        var vm = this;

        var items = [];

        var itemsToAdd = [{
                firstName: '',
                lastName: ''
            }];

        function add(itemToAdd) {
            var index = vm.itemsToAdd.indexOf(itemToAdd);
            vm.itemsToAdd.splice(index, 1);
            vm.items.push(angular.copy(itemToAdd))
        }

        function addNew() {
            alert("here");
            var data = {
                firstName: '',
                lastName: ''
            };
            vm.itemsToAdd.push(data)
        }

    }

})();

