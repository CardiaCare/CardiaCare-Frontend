  (function () {

    angular
            .module('app')
            .controller('QuestionnaireListController', ['$scope', 'Restangular','$mdDialog',
                QuestionnaireListController
            ]);  
    
  
    function QuestionnaireListController($scope, Restangular, $mdDialog) {
        
        Restangular.all('survey')
                .getList()
                .then(function (response) {
                    $scope.questionnaires = response;
                });

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

    }
})();