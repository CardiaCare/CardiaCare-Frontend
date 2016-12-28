(function () {


    angular
        .module('app')
        .controller('FeedbackListController', ['$scope', '$stateParams', 'HttpService',
            FeedbackListController
        ]);

    function FeedbackListController($scope, $stateParams, HttpService) {
        var vm = this;

        vm.feedbacks = [];

        HttpService.getFeedbackList($stateParams.userId)
            .then(function (feedbacks) {
                vm.feedbacks = feedbacks;
            });
   }

})();
