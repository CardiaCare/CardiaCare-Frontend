  (function () {

    angular
            .module('app')
            .controller('QuestionnaireListController', ['$scope', 'Restangular', '$translate','$mdDialog',
                QuestionnaireListController
            ]);  
    
  
    function QuestionnaireListController($scope, Restangular, $translate, $mdDialog) {
        
        Restangular.all('survey')
                .getList()
                .then(function (response) {
                    $scope.questionnaires = response;
                });

        $scope.deleteQuestionnaire = function (ev, item) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                    .title($translate.instant('DELETE_QST'))
                    .textContent(item.description)
                    .ariaLabel('questionnaire')
                    .targetEvent(ev)
                    .ok($translate.instant('YES'))
                    .cancel($translate.instant('NO'));

            $mdDialog.show(confirm).then(function () {
                $scope.questionnaires.splice($scope.questionnaires.indexOf(item), 1);
            }, function () {

            });
        };

    }
})();