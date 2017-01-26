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

                item.remove().then(function () {
                    $scope.questionnaires.splice($scope.questionnaires.indexOf(item), 1);
                }, function (error) {
                    vm.showSimpleToast("" + error.data.message);
                });
            }, function () {

            });
        };

        $scope.openQuestionnaire = function (ev, questionnaire_id) {

            $mdDialog.show({
                controller: QuestionnireDialogController,
                templateUrl: 'questionnaire.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,

            });

            function QuestionnireDialogController($scope, $mdDialog) {
                Restangular.one('survey', questionnaire_id).get()
                        .then(function (response) {
                            $scope.questionnaire = response;
                            $scope.questions = angular.fromJson($scope.questionnaire.data);
                        });

                $scope.hide = function () {
                    $mdDialog.hide();
                };

                $scope.cancel = function () {
                    $mdDialog.cancel();
                };

                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };
            }
            ;
        }


    }
})();