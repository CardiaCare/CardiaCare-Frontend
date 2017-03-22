  (function () {

    angular
            .module('app')
            .controller('QuestionnaireListController', ['$scope', 'Restangular', '$translate','$mdDialog',
                QuestionnaireListController
            ]);  
    
  
    function QuestionnaireListController($scope, Restangular, $translate, $mdDialog) {
        
        $scope.questionnaires = [];
        
        $scope.currentPage = 0;
        $scope.itemsPerPage = 10;
        $scope.lastPageNum = 0;
        
        Restangular.all('questionnaire')
                .getList()
                .then(function (response) {
                    $scope.questionnaires = response.data;
                    $scope.currentPage = response.headers('X-Pagination-Current-Page') - 1;
                    $scope.lastPageNum = response.headers('X-Pagination-Page-Count');
                });

        $scope.pageBack = function () {
            $scope.currentPage = $scope.currentPage - 1;
            Restangular.all('questionnaire').getList( {page: $scope.currentPage + 1})
                    .then(function (response) {
                        $scope.questionnaires = response.data;
                    });

        };
        $scope.pageForward = function () {
            $scope.currentPage = $scope.currentPage + 1;
            Restangular.all('questionnaire').getList( {page: $scope.currentPage + 1})
                    .then(function (response) {
                        $scope.questionnaires = response.data;
                    });
        };
        
        $scope.firstPage = function () {
            return $scope.currentPage == 0;
        };
        $scope.lastPage = function () {
            return $scope.currentPage == ($scope.lastPageNum - 1);
        };
        $scope.numberOfPages = function () {
            return $scope.lastPageNum;
        };
        $scope.startingItem = function () {
            return $scope.currentPage * $scope.itemsPerPage;
        };

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
                Restangular.one('questionnaire', questionnaire_id).get()
                        .then(function (response) {
                            $scope.questionnaire = response.data;
                            $scope.questions = $scope.questionnaire.questions;
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