  (function () {

    angular
            .module('app')
            .controller('QuestionnaireListController', ['$scope', 'HttpService','$mdDialog',
                QuestionnaireListController
            ]);  
    
  
    function QuestionnaireListController($scope, HttpService, $mdDialog) {
        var vm = this;

        $scope.questionnaires = [
            {
                description: "first",
                version: "1.0"
            },
            {
                description: "second",
                version: "1.1"
            }

        ];
               

        $scope.deleteQuestionnaire = function (ev, item) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                    .title('Do you want to delete the questionnaire?')
                    .textContent(item.description)
                    .ariaLabel('questionnaire')
                    .targetEvent(ev)
                    .ok('Yes!')
                    .cancel('No');

            $mdDialog.show(confirm).then(function () {
                $scope.questionnaires.splice($scope.questionnaires.indexOf(item), 1);
            }, function () {

            });
        };

        
//        HttpService.getServeyList()
//            .then(function (questionnaires) {
//                vm.questionnaires = questionnaires;
//            });


    }
})();