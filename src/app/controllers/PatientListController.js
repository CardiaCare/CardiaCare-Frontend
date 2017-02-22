(function () {


    angular
        .module('app')
        .controller('PatientListController', ['$scope', 'Restangular', '$translate', '$mdDialog',
            PatientListController
        ]);

    function PatientListController($scope, Restangular, $translate, $mdDialog) {
        $scope.patients = [];
        $scope.activated = true;

        Restangular.all('patients')
                .getList()
                .then(function (response) {
                    $scope.patients = response;
                    $scope.activated = false;
                });


        $scope.dialogQuestionnaire = function (ev, patient_id) {
            $scope.questionniares=[];

            $mdDialog.show({
                controller: SurveyAddDialogController,
                templateUrl: 'addqst.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });

            function SurveyAddDialogController($scope, $mdDialog) {
                console.log(patient_id);
                //get all surveys
                var questionnaires = Restangular.all('questionnaire')
                        .getList()
                        .then(function (response) {
                            $scope.questionnaires = response;
                        });
                        
                        
                //TODO get checked surveys for this  patient_id       
                        
                $scope.hide = function () {
                    $mdDialog.hide();
                };

                $scope.cancel = function () {
                    $mdDialog.cancel();
                };

                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };

                $scope.addQuestionnaire = function (questionnaire_id, selected) {
                    if (selected){
                        //TODO add
                        console.log(questionnaire_id);

                        Restangular.one("patients", patient_id)
                                .one('questionnaires', questionnaire_id)
                                .post()
                                .then(function (response) {
                                }, 
                                function (response) {
                                });

                        
                        
                    } else {
                        //TODO delete
                        console.log("delete");
                    }
                    
                }

            }
            ;

        }

    }
})();


