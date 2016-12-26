(function () {


    angular
        .module('app')
        .controller('FeedbackListController', ['$scope', 'HttpService',
            FeedbackListController
        ]);

    function FeedbackListController($scope, HttpService) {
        var vm = this;


        HttpService.getFeedbackList()
            .then(function (feedbacks) {
                vm.feedbacks = feedbacks;
            });

//        vm.patients2 = [
//            {
//                name: 'Ivan',
//                patronymic: 'Ivanovich',
//                surname: 'Ivanov'
//
//            },
//            {
//                name: 'Kirill',
//                patronymic: 'Kirillovich',
//                surname: 'Kirillov'
//
//            }
//
//        ];
   }

})();
