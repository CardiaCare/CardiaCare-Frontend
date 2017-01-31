(function () {

    angular
        .module('app')
        .controller('ServeyDesignerController', ['$mdDialog','$scope',
            ServeyDesignerController
        ]);
    function ServeyDesignerController($mdDialog, $scope) {
        $scope.questions = [];
        $scope.dichotomous = {};
        $scope.bipolar = {};
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
    
        $scope.answerToAdd = {};
    
        $scope.fixAnswer = function (answerToAdd) {
            var index = $scope.answersToAdd.indexOf(answerToAdd);
            $scope.answersToAdd.splice(index, 1);
            $scope.answers.push(angular.copy(answerToAdd))
        };


        $scope.fix = function (itemToAdd) {
            //fix all
//            var index = $scope.itemsToAdd.indexOf(itemToAdd);
//            $scope.itemsToAdd.splice(index, 1);
//            $scope.questions.push(angular.copy(itemToAdd))
        };
        
        $scope.fixDichotomous = function (itemToAdd) {
                       
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

            itemToAdd.answer = $scope.answerToAdd;
            
            var index = $scope.itemsToAdd.indexOf(itemToAdd);
            $scope.itemsToAdd.splice(index, 1);
            $scope.questions.push(angular.copy(itemToAdd));
            
            $scope.vis_dichotomous = !$scope.vis_dichotomous;
            console.log($scope.vis_dichotomous);
            $scope.dichotomous = {};
            console.log($scope.questions);

        };
        
        $scope.fixBipolar = function (itemToAdd) {
                       
            var answerItems = [];
                answerItems.push({
                    itemScore: 0,
                    itemText: $scope.bipolar.option1,
                    uri: "empty",
                    subAnswers:[]
                });
                answerItems.push({
                    itemScore: 0,
                    itemText: $scope.bipolar.option2,
                    uri: "empty",
                    subAnswers:[]
                });
                
                $scope.answerToAdd = {
                    items:answerItems,
                    type: "Bipolar",
                    uri:"empty"
                };

            itemToAdd.answer = $scope.answerToAdd;
            
            var index = $scope.itemsToAdd.indexOf(itemToAdd);
            $scope.itemsToAdd.splice(index, 1);
            console.log($scope.questions);
            console.log(itemToAdd);
            $scope.questions.push(angular.copy(itemToAdd));
            
            $scope.vis_bipolar = !$scope.vis_bipolar;
            console.log($scope.vis_bipolar);
            $scope.bipolar = {};
            console.log($scope.questions);

        };
        
        $scope.addNew = function () {
            $scope.itemsToAdd.push({
                description: '',
                uri: '',
                answer: {}
            })
        };

        var forms = [
            "form1.tmpl.html",
            "form2.tmpl.html",
            "form3.tmpl.html",
        ];

        $scope.displayedForms = [];

        $scope.addForm = function (formIndex) {
            $scope.displayedForms.push(forms[formIndex]);
        };

        $scope.changeSelected = function (ev, type, answer) {
            
            switch (type) {
                case "Dichotomous":
                    $scope.addForm(0);
                     //$scope.vis_dichotomous = !$scope.vis_dichotomous;
                     //console.log($scope.vis_dichotomous);
                    break;
                case "Bipolar":
                    $scope.addForm(1);
//                    $scope.vis_bipolar = !$scope.vis_bipolar;
//                    console.log($scope.vis_bipolar);
                    break;                    
                case "Single Choise":
                    $scope.addForm(2);
//                    $scope.vis_dialog_choise = !$scope.vis_dialog_choise;
                    break;
                case "Multiple Choise":
                    break;
            }
        };



    }

})();

