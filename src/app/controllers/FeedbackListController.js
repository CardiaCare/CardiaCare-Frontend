(function () {


    angular
            .module('app')
            .controller('FeedbackListController', ['$scope', '$stateParams', 'Restangular', '$translate', '$mdDialog',
                FeedbackListController
            ]);

    function FeedbackListController($scope, $stateParams, Restangular, $translate, $mdDialog) {
        var vm = this;

        $scope.feedbacks = [];

        Restangular.one('patients', $stateParams.userId).getList("feedback")
                .then(function (feedbacks) {
                    $scope.feedbacks = feedbacks;
                });
        // HttpService.getFeedbackList($stateParams.userId)
        //     .then(function (feedbacks) {
        //         vm.feedbacks = feedbacks;
        //     });


        $scope.deleteFeedback = function (ev, item) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                    .title($translate.instant('DELETE_FDB'))
                    .textContent(item.description)
                    .ariaLabel('feedback')
                    .targetEvent(ev)
                    .ok($translate.instant('YES'))
                    .cancel($translate.instant('NO'));

            $mdDialog.show(confirm).then(function () {

                item.remove().then(function () {
                    $scope.feedbacks.splice($scope.feedbacks.indexOf(item), 1);
                }, function (error) {
                    vm.showSimpleToast("" + error.data.message);
                });
            }, function () {

            });
        };

        $scope.openFeedback = function (ev, feedback_id) {

            $mdDialog.show({
                controller: FeedbackDialogController,
                templateUrl: 'feedback.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });

            function FeedbackDialogController($scope, $mdDialog) {

                Restangular.one('patients', $stateParams.userId)
                        .one('feedback', feedback_id)
                        .get()
                        .then(function (responce) {
                            $scope.feedback = responce;
                            console.log($scope.feedback);


                            Restangular.one('questionnaire', $scope.feedback.questionnaire_id).get()
                                    .then(function (response) {
                                        $scope.questionnaire = response;
                                        console.log($scope.questionnaire);

                                        $scope.questions = $scope.questionnaire.questions;
                                        $scope.responds = $scope.feedback.responds;

                                        angular.forEach($scope.responds, function (respond) {
                                            angular.forEach($scope.questions, function (question) {

                                                if (respond.question_id === question.id) {
                                                    respond.question_id = question.description;

                                                    angular.forEach(respond.responses, function (response) {
                                                        angular.forEach(question.answers, function (answer) {
                                                            if (response.answer_id === answer.id) {
                                                                response.answer_id = answer.type;
                                                                
                                                                angular.forEach(response.responseItems, function (responseItem) {
                                                                    angular.forEach(answer.items, function (item) {

                                                                        console.log(responseItem.linkedItems_id);
                                                                        console.log(item.id);
                                                                        if (responseItem.linkedItems_id === item.id)
                                                                            responseItem.responseScore = item.itemText;
                                                                            console.log(item.text);

                                                                    });
                                                                });


                                                            }
                                                        });
                                                    });
                                                }
                                            });
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
            };
        };

    }

})();
