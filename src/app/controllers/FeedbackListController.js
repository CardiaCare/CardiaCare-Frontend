(function () {


    angular
        .module('app')
        .controller('FeedbackListController', ['$scope', 'HttpService',
            FeedbackListController
        ]);

    function FeedbackListController($scope, HttpService) {
        var vm = this;

        vm.feedbacks = [];

        HttpService.getFeedbackList()
            .then(function (feedbacks) {
                vm.feedbacks = feedbacks;
            });
   }

})();
