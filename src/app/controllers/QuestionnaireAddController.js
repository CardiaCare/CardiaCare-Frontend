(function () {

    angular
            .module('app')
            .controller('QuestionnaireAddController', ['HttpService',
                QuestionnaireAddController
            ])
            .directive('apsUploadFile', apsUploadFile);

    function apsUploadFile() {
        var directive = {
            restrict: 'E',
            template: '<md-input-container  layout="row" md-no-float><input id="textInput" ng-model="fileName" type="text" placeholder="No file chosen" ng-readonly="true"><md-button id="uploadButton" class="md-raised md-primary" flex="20" flex-sm="100" aria-label="attach_file">Choose file </md-button></md-input-container><input id="fileInput" type="file" class="ng-hide">'
            ,
            link: apsUploadFileLink
        };
        return directive;
    }

    function apsUploadFileLink(scope, element, attrs) {
        var input = $(element[0].querySelector('#fileInput'));
        var button = $(element[0].querySelector('#uploadButton'));
        var textInput = $(element[0].querySelector('#textInput'));

        if (input.length && button.length && textInput.length) {
            button.click(function (e) {
                input.click();
            });
            textInput.click(function (e) {
                input.click();
            });
        }

        input.on('change', function (e) {
            var files = e.target.files;
            if (files[0]) {
                scope.fileName = files[0].name;
            } else {
                scope.fileName = null;
            }
            scope.$apply();
        });
    }
    ;

    function QuestionnaireAddController(HttpService) {
        var vm = this;
        vm.questionnaire =
                {
                    doctor: "Doctor",
                    version: "1.0",
                    title: "first questionnaire",
                    data: "12345"
                };

        vm.questionnaires = [
            {
                description: "first",
                version: "1.0"
            },
            {
                description: "second",
                version: "1.1"
            }

        ]
        
//        HttpService.getServeyList()
//            .then(function (questionnaires) {
//                vm.questionnaires = questionnaires;
//            });

        vm.downloadQuestionnaire = function () {
            
            HttpService.postSurvey(vm.questionnaire)
                    .then(function () {
                    });
        }

    }
})();