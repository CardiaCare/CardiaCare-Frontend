(function () {

    angular
        .module('app')
        .controller('ServeyDesignerController', ['$mdDialog','$scope',
            ServeyDesignerController
        ]);
    function ServeyDesignerController($mdDialog, $scope) {
        $scope.questions = [];
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

        $scope.itemsToAdd = [{
            description: '',
            uri: '',
            answer:{}
        }];
    
        $scope.answerToAdd = {

        };
    
        $scope.fixAnswer = function (answerToAdd) {
            var index = $scope.answersToAdd.indexOf(answerToAdd);
            $scope.answersToAdd.splice(index, 1);
            $scope.answers.push(angular.copy(answerToAdd))
        };


        $scope.fix = function (itemToAdd) {
            var index = $scope.itemsToAdd.indexOf(itemToAdd);
            $scope.itemsToAdd.splice(index, 1);
            $scope.questions.push(angular.copy(itemToAdd))
        };
        
        $scope.addNew = function () {

            $scope.itemsToAdd.push({
            description: '',
            uri: '',
            answer:{}
            })
        };

        $scope.changeSelected = function (ev, type, answer) {
            switch (type) {
                case "Dichotomous":
                    $mdDialog.show({
                        controller: DichotomouseDialogController,
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

        function DichotomouseDialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
            $scope.addAnswers = function () {
                
                var answerItems = [];
                answerItems.push({
                    itemScore: 0,
                    itemText: $scope.dichotomous.option1,
                    uri: "empty",
                    subAnswers:[]
                });
                answerItems.push({
                    itemScore: 0,
                    itemText: $scope.dichotomous.option2,
                    uri: "empty",
                    subAnswers:[]
                });
                
                $scope.answerToAdd = {
                    items:answerItems,
                    type: "Dichotomous",
                    uri:"empty"
                };

                
                $mdDialog.hide();
            }
        }
        ;
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
            $scope.addNewAnswer = function () {
                $scope.answersToAdd.push({
                    option: ''
                })
            };
        }
        ;


    }

})();

