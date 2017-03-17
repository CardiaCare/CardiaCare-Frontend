(function () {

    angular
            .module('app')
            .controller('PatientListController', ['$scope', 'Restangular', '$translate', '$mdDialog', '$stateParams',
                PatientListController
            ]);

    function PatientListController($scope, Restangular, $translate, $mdDialog, $stateParams) {
        $scope.patients = [];
        $scope.activated = true;

        Restangular.all('patients')
                .getList()
                .then(function (response) {
                    $scope.patients = response;
                    $scope.activated = false;
                });


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
                            $scope.questionnaires = response;
                        });

                Restangular.one('patients', patient_id)
                        .all('questionnaires')
                        .getList()
                        .then(function (response) {
                            $scope.patient_questionnaires = response;
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


