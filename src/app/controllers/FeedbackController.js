(function () {

    angular
            .module('app')
            .controller('FeedbackController', ['$scope', 'Restangular', '$translate', '$mdDialog',
                FeedbackController
            ]);

    function FeedbackController($scope, Restangular, $translate, $mdDialog) {

        Restangular.one('questionnaire', 4).get()
                .then(function (response) {
                    $scope.questionnaire = response;
                    $scope.questions = angular.fromJson($scope.questionnaire.data);
                    $scope.feedback = $scope.feedback_server;
                    
                    angular.forEach($scope.feedback.responses, function (response) {
                        angular.forEach($scope.questions.questions, function (question) {
     
                            if (response.questionUri === question.uri){
                                response.questionUri = question.description;
                                
                                angular.forEach(response.responseItems, function (responseItem) {
                                    angular.forEach(question.items, function (item) {
                                        if (responseItem.uri === item.uri)
                                            responseItem.uri = item.itemText;
                                        
                                        
                                    });
                                });
                            }
                        });
                    });

                });


        $scope.feedback_server = {
            "personUri": "Student", "questionnaireUri": "feedback",
            "responses":
                    [{"questionUri": "http://oss.fruct.org/smartcare#617412",
                            "responseItems":
                                    [{"fileUri": "http://oss.fruct.org/smartcare#191613",
                                            "linkedItems": [],
                                            "textItem": "SingleChoise",
                                                        "uri": "http://oss.fruct.org/smartcare#191613"}],
                                        "uri": "http://oss.fruct.org/smartcare#617412"},
                                    {"questionUri": "http://oss.fruct.org/smartcare#7284210",
                                        "responseItems":
                                                [{"fileUri": "http://oss.fruct.org/smartcare#8229811",
                                                        "linkedItems": [],
                                                        "textItem": "SingleChoise",
                                                        "uri": "http://oss.fruct.org/smartcare#8229811"}],
                                        "uri": "http://oss.fruct.org/smartcare#7284210"},
                                    {"questionUri": "http://oss.fruct.org/smartcare#5532215",
                                        "responseItems":
                                                [{
                                                        "fileUri": "http://oss.fruct.org/smartcare#8117516",
                                                        "linkedItems": [],
                                                        "textItem": "Dichotomous",
                                                        "uri": "http://oss.fruct.org/smartcare#8117516"}],
                                        "uri": "http://oss.fruct.org/smartcare#5532215"},
                                    {"questionUri": "http://oss.fruct.org/smartcare#4261019",
                                        "responseItems":
                                                [{
                                                        "fileUri": "http://oss.fruct.org/smartcare#4631520",
                                                        "linkedItems":
                                                                [{"itemScore": "0",
                                                                        "itemText": "0",
                                                                        "subAnswers": [],
                                                                        "uri": "http://oss.fruct.org/smartcare#7016521"}],
                                                        "textItem": "BipolarQuestion",
                                                        "uri": "http://oss.fruct.org/smartcare#4631520"}],
                                        "uri": "http://oss.fruct.org/smartcare#4261019"},
                                    {"questionUri": "http://oss.fruct.org/smartcare#3419823",
                                        "responseItems":
                                                [{"fileUri": "http://oss.fruct.org/smartcare#6299524",
                                                        "linkedItems": [],
                                                        "textItem": "MultipleChoise",
                                                        "uri": "http://oss.fruct.org/smartcare#6299524"}],
                                        "uri": "http://oss.fruct.org/smartcare#3419823"}]
        };

    }

})();
