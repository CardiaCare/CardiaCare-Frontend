(function () {

angular
        .module('app')
        .controller('ServeyDesignerController', ['$scope',
                ServeyDesignerController
        ]);
        function ServeyDesignerController($scope) {
            $scope.items = [];
            
            $scope.qtypes = [
                {
                    description: "Dichotomois"
                },
                {
                    description: "Open"
                },
                {
                    description: "Single Selected"
                }
            ];
            
        
            $scope.itemsToAdd = [{
                firstName: '',
                lastName: ''
             }];
            
            $scope.fix = function(itemToAdd) {
                var index = $scope.itemsToAdd.indexOf(itemToAdd);
                $scope.itemsToAdd.splice(index, 1);
                $scope.items.push(angular.copy(itemToAdd))
        };

        $scope.addNew = function () {

            $scope.itemsToAdd.push({
                firstName: '',
                lastName: ''
            })
        };

        $scope.changeSelected = function () {
            switch ($scope.qtypes.description) {
                case "Dichotomois":
                    $console.log("1");
                    break;
                case "Open":
                    $console.log("2");
                    break;
            }
        };


    }

})();

