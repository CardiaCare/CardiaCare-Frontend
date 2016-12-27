(function () {

    angular
        .module('app')
        .controller('ServeyDesignerController', ['$mdDialog','$scope',
            ServeyDesignerController
        ]);
    function ServeyDesignerController($mdDialog, $scope) {
        $scope.items = [];
        $scope.chosenType = '';
        $scope.qtypes = [
            {
                description: "Dichotomous"
            },
            {
                description: "Open"
            },
            {
                description: "Single Choise"
            },
            {
                description: "Multiple Choise"
            },
            {
               description: "Bipolar"
            }
        ];

        $scope.answers = [];

        $scope.itemsToAdd = [{
            question: '',
            type: ''
        }];
    
        $scope.answersToAdd = [{
            option: ''
        }];
    
        $scope.fixAnswer = function (answerToAdd) {
            var index = $scope.answersToAdd.indexOf(answerToAdd);
            $scope.answersToAdd.splice(index, 1);
            $scope.answers.push(angular.copy(answerToAdd))
        };

        $scope.addNewAnswer = function () {
            $scope.answersToAdd.push({
                option: ''
            })
        };


        $scope.fix = function (itemToAdd) {
            var index = $scope.itemsToAdd.indexOf(itemToAdd);
            $scope.itemsToAdd.splice(index, 1);
            $scope.items.push(angular.copy(itemToAdd))
        };
        
        $scope.addAnswers = function (answersToAdd) {
            alert(answersToAdd);
        }
        

        $scope.addNew = function () {

            $scope.itemsToAdd.push({
            question: '',
            type: ''
            })
        };

        $scope.changeSelected = function (ev, type) {
            switch (type) {
                case "Dichotomous":
                    $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'dialog-dichotomouse.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    });
                    break;
                case "Bipolar":
                    $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'dialog-bipolar.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    });
                    break;
                    
                case "Single Choise":
                    $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'dialog-choise.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    });
                    break;
                case "Multiple Choise":
                    $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'dialog-choise.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    });
                    break;
            }
        };
        
        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
            $scope.addAnswers = function (answersToAdd) {
            alert(answersToAdd);
            }
        };


    }

})();

