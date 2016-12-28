  (function () {

    angular
            .module('app')
            .controller('QuestionnaireListController', ['$scope', 'HttpService',
                QuestionnaireListController
            ]);  
    
  
    function QuestionnaireListController($scope, HttpService) {
        var vm = this;

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


    }
})();