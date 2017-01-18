(function () {


    angular
        .module('app')
        .controller('FeedbackListController', ['$scope', '$stateParams', 'Restangular',
            FeedbackListController
        ]);

    function FeedbackListController($scope, $stateParams, Restangular) {
        var vm = this;

        $scope.feedbacks = [];

        Restangular.one('patients', $stateParams.userId).getList("feedback")
            .then(function(feedbacks){
                $scope.feedbacks = feedbacks;
            });
        // HttpService.getFeedbackList($stateParams.userId)
        //     .then(function (feedbacks) {
        //         vm.feedbacks = feedbacks;
        //     });
   }

})();
