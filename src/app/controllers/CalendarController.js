(function () {
    'use strict';

    angular.module('app')
        .controller('CalendarController', ['$scope', '$filter', '$q', '$timeout', '$log', 'MaterialCalendarData', '$mdDialog',
            CalendarController
        ]);

    function CalendarController($scope, $filter,  $q, $timeout, $log, MaterialCalendarData, $mdDialog) {

        $scope.selectedDate = new Date();
        $scope.weekStartsOn = 0;
        $scope.dayFormat = "d";
        $scope.tooltips = true;
        $scope.disableFutureDates = false;

        $scope.fullscreen = function () {
            var elem = document.querySelector("#measurement-calendar");
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        };

        $scope.setDirection = function (direction) {
            $scope.direction = direction;
            $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
        };

        $scope.dayClick = function (ev, date) {
            
            $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
            
            $mdDialog.show({
                controller: DayDialogController,
                templateUrl: 'day.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals:{dataToPass: date}
            });
            
            function DayDialogController($scope, $mdDialog, dataToPass) {
                
                $scope.msg = "You clicked " + $filter("date")(dataToPass, "MMM d, y h:mm:ss a Z");
                
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

        $scope.prevMonth = function (data) {
            $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
        };

        $scope.nextMonth = function (data) {
            $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
        };

        $scope.setContentViaService = function () {
            var today = new Date();
            MaterialCalendarData.setDayContent(today, '<span> :oD </span>')
        }

        var measurement_event = {
            "2017-01-01": 
                [
                    {"name": "Last Day of Kwanzaa", "country": "US", "date": "2015-01-01"},
                    {"name": "New Year's Day", "country": "US", "date": "2015-01-01"}
                ], 
            "2017-01-06": 
                [
                    {"name": "Epiphany", "country": "US", "date": "2015-01-06"}
                ], 
            "2017-01-07": 
                [
                    {"name": "Orthodox Christmas", "country": "US", "date": "2015-01-07"}
                ],
            "2017-01-19": 
                [
                    {"name": "Martin Luther King, Jr. Day", "country": "US", "date": "2015-01-19"}
                ]};

        // You would inject any HTML you wanted for
        // that particular date here.
        var numFmt = function (num) {
            num = num.toString();
            if (num.length < 2) {
                num = "0" + num;
            }
            return num;
        };

        var loadContentAsync = true;
        $log.info("setDayContent.async", loadContentAsync);
        
        $scope.setDayContent = function (date) {

            var key = [date.getFullYear(), numFmt(date.getMonth() + 1), numFmt(date.getDate())].join("-");
            var data = (measurement_event[key] || [{name: ""}])[0].name;
            if (loadContentAsync) {
                var deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(data);
                });
                return deferred.promise;
            }

            return data;

        };
    }
})();

