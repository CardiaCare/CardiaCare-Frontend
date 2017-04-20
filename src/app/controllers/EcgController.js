(function(){

    angular
            .module('app')
            .controller('EcgController', ['$scope', '$stateParams', 'Restangular', '$mdToast', 'AuthService', 'AUTH_EVENTS',
                EcgController
            ]);

    function EcgController($scope, $stateParams, Restangular, $mdToast, AuthService, AUTH_EVENTS) {
        
        
        //ecg data initialization
        
//        $scope.ecg_data = [];
//        $scope.array_length = 0;
//               
//        Restangular.all('biosignals')
//                .getList()
//                .then(function (response) {
//                    $scope.ecg = response.data;
//                    var ecg_string_data = $scope.ecg[0].data;
//                    var ecg_integer_array_data = ecg_string_data.split(',').map(Number); 
//                    $scope.ecg_array = ecg_integer_array_data;
//                    
//                    //integer array to object array
//                    for (i = 0; i < ecg_integer_array_data.length; i = i+15) {
//                        var obj = {
//                            x: i,
//                            y: ecg_integer_array_data[i]
//                        }
//                        $scope.ecg_data.push(obj);
//                    }
//                    $scope.array_length = $scope.ecg_data[$scope.ecg_data.length - 1].x;
//                    console.log($scope.ecg_data[$scope.ecg_data.length - 1].x);
//                });
        
        $scope.ecg_data = [{x:1, y:11}, {x:2, y:10}, {x:3, y:14}, {x:4, y:21}, {x:5, y:13}, {x:6, y:21}, {x:7, y:21}, {x:8, y:18}, {x:9, y:11}, {x:10, y:11}, {x:11, y:18}, {x:12, y:14}, {x:13, y:10}, {x:14, y:20}, {x:15, y:21}, {x:16, y:28}, {x:17, y:12}, {x:18, y:16}, {x:19, y:22}, {x:20, y:18}, {x:21, y:21}, {x:22, y:10}, {x:23, y:11}, {x:24, y:14}, {x:25, y:9}, {x:26, y:14}, {x:27, y:10}, {x:28, y:21}, {x:29, y:11}, {x:30, y:10}, {x:31, y:14}, {x:32, y:21}, {x:33, y:13}, {x:34, y:21}, {x:35, y:21}, {x:36, y:18}, {x:37, y:11}, {x:38, y:11}, {x:39, y:18}, {x:40, y:14}, {x:41, y:10}, {x:42, y:20}, {x:43, y:21}, {x:44, y:28}, {x:45, y:12}, {x:46, y:16}, {x:47, y:22}, {x:48, y:18}, {x:49, y:21}, {x:50, y:10}, {x:51, y:11}, {x:52, y:14}, {x:53, y:9}, {x:54, y:14}, {x:55, y:10}, {x:56, y:21}, {x:57, y:11}];
        $scope.array_length = $scope.ecg_data[$scope.ecg_data.length - 1].x;
        
        //BP data initialization
        //$scope.bp_data = [{x:1000,y: 160, shape:'circle'},{x: 2000, y:160, shape:'circle'}];
        $scope.bp_data = [{x:10,y: 16, shape:'circle'},{x: 20, y:26, shape:'circle'}];


        /* Chart options */
        $scope.options = {
            chart: {
                type: 'multiChart',
                height: 500,
                width: 500,
                margin: {
                    top: 30,
                    right: 30,
                    bottom: 30,
                    left: 30
                },
                scatters1: {
                    xDomain: [0, $scope.array_length] // get x of last item
                },
                xAxis: {
                    tickFormat: function (d) {
                        return d3.format(',f')(d);
                    }
                },
                yAxis: {
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    }
                }
            }
        };

        /* Data to Chart*/
        $scope.data = [
            {
                key: 'One',
                type: 'line',
                yAxis: 1,
                xAxis:1,
                values: $scope.ecg_data
            }
            ,
            {
                key: 'Two',
                type: 'scatter',
                yAxis: 1,
                xAxis:1,
                //TODO: не работает
                size: 0.5,
                values: $scope.bp_data 
            }
        ];
                
                
//                
//            { 
//            
//            x:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
//            
//            
//            y: [ 65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55 ]};        
        
        
        
//       with angular-chart.js
//        $scope.labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];
//        $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
////        $http.get('../../asserts/data.json').success(function (data) {
////            console.log(data);
////            $scope.data = data;
////        });
//
////                
//        //$scope.series = ['Series A', 'Series B'];
//
//
//    $scope.data = [
//        [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55],
////bar            [0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 55, 0, 0, 0, 30, 0, 0, 0, 0, 58, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 59, 0, 0, 0, 0, 0]
//
//        [{
//            x: 5,
//            y: 56,
//            r: 5
//        },
//        {
//            x: 23,
//            y: 78,
//            r: 5
//        }]
//    ];
//
//        $scope.datasetOverride = [
//            {
//                label: "Line chart",
//                hoverBackgroundColor: "rgba(255,99,132,0.4)",
//                hoverBorderColor: "rgba(255,99,132,1)",
//                type: 'line'
//            },
//            {
//                label: "Bubble chart",
//                type: 'bubble'
//            }
//            
////bar            {
////                label: "Bar chart",
////                borderWidth: 1,
////                type: 'bar'
////            }
//        ];
//
//        $scope.options = {
//            elements: {
//                line: {
//                    fill: false,
//                    tension: 0,
//                    borderWidth: 2
//                },
//                point: {
//                    radius: 0
//                }
//            },
//            scales: {
//                xAxes: [{
//                        display: false
////                        ticks: {
////                            max: 1,
////                            min: 42,
////                            stepSize: 1
////                        }
//                    }],
//                yAxes: [{
//                        display: true,
//                        ticks: {
//                            max: 85,
//                            min: 39,
//                            stepSize: 1
//                        }
//                    }],
//                gridLines: {
//                    display: true
//                }
//            },
//            tooltips: {
//                enabled: true
//            }
//
//        };
//
//        $scope.onClick = function (points, evt) {
//            console.log(points, evt);
//        };
   }

})();

