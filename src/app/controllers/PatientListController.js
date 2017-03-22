(function () {

    angular
            .module('app')
            .controller('PatientListController', ['$scope', 'Restangular', '$translate', '$mdDialog', '$stateParams',
                PatientListController
            ]);

    function PatientListController($scope, Restangular, $translate, $mdDialog, $stateParams) {
        $scope.patients = [];
        $scope.activated = true;
        
        $scope.currentPage = 0;
        $scope.itemsPerPage = 10;
        $scope.lastPageNum = 0;

        Restangular.all('patients')
                .getList()
                .then(function (response) {
                    $scope.patients = response.data;
                    $scope.activated = false;
                    $scope.currentPage = response.headers('X-Pagination-Current-Page') - 1;
                    $scope.lastPageNum = response.headers('X-Pagination-Page-Count');
                });

        $scope.pageBack = function () {
            $scope.currentPage = $scope.currentPage - 1;
            Restangular.all('patients').getList( {page: $scope.currentPage + 1})
                    .then(function (response) {
                        $scope.patients = response.data;
                    });

        };
        $scope.pageForward = function () {
            $scope.currentPage = $scope.currentPage + 1;
            Restangular.all('patients').getList( {page: $scope.currentPage + 1})
                    .then(function (response) {
                        $scope.patients = response.data;
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
  

        $scope.dialogQuestionnaire = function (ev, patient_id) {
            $scope.questionniares = [];

            $mdDialog.show({
                controller: SurveyAddDialogController,
                templateUrl: 'addqst.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });

            function SurveyAddDialogController($scope, $mdDialog) {
                //get all surveys
                Restangular.all('questionnaire')
                        .getList()
                        .then(function (response) {
                            $scope.questionnaires = response.data;
                        });

                Restangular.one('patients', patient_id)
                        .all('questionnaires')
                        .getList()
                        .then(function (response) {
                            $scope.patient_questionnaires = response.data;
                            angular.forEach($scope.questionnaires, function (questionnaire) {
                                angular.forEach($scope.patient_questionnaires, function (patient_questionnaire) {
                                    if (questionnaire.id === patient_questionnaire.id) {
                                        questionnaire.selected = true;
                                    }
                                });
                            });
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

                $scope.checkQuestionnaire = function (questionnaire_id, selected) {
                    if (selected) {
                        Restangular.one("patients", patient_id)
                                .one('questionnaires', questionnaire_id)
                                .post()
                                .then(function (response) {
                                },function (response) {});

                    } else {
                        Restangular.one("patients", patient_id)
                                .one('questionnaires', questionnaire_id)
                                .remove()
                                .then(function (response) {
                                },function (response) {});
                    }
                };
            };
        };
    }
})();


