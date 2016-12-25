(function () {
    'use strict';

    angular.module('app')
        .service('HttpService', ['$http',
            HttpService
        ]);

    function HttpService($http) {

//      'POST recovery' => 'user/recovery/request',
//      'OPTIONS recovery' => 'user/recovery/options',
//      'PUT user/password' => 'user/recovery/recover',
        this.postRecovery = function (recovery_email) {
            return $http({
                method: "POST",
                url: 'http://api.cardiacare.ru/recovery',
                params: {
                    email: recovery_email
                }
            })
                .then(function (response) {
                        // success
                    },
                    function (response) { // optional
                        // failed
                    });
        };

        this.putRecovery = function (recovery) {
            return $http({
                method: "PUT",
                url: 'http://api.cardiacare.ru/user/password',
                params: recovery
            })
                .then(function (response) {
                        // success
                    },
                    function (response) { // optional
                        // failed
                    });
        };


//      'GET patients' => 'emr/patient/index',
//      'OPTIONS patients' => 'emr/patient/options',
//      'GET patients/<id:\d+>' => 'emr/patient/view',
//      'PUT patients/<id:\d+>' => 'emr/patient/update',
//      'DELETE patients/<id:\d+>' => 'emr/patient/delete',
//      'OPTIONS patients/<id:\d+>' => 'emr/patient/options',

        this.getPatientList = function () {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/patients',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (data) {
                return data;
            }, function () {
                alert("error");
                return null;
            });

        };

        this.getPatientById = function (patient_id) {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/patients',
                params: {id: patient_id},
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                console.log(response);
                return response.data;
            }, function () {
                alert("error");
                return null;
            });

        };

        this.putPatientById = function (patient) {
            return $http({
                method: "PUT",
                url: 'http://api.cardiacare.ru/patients',
                params: patient
            })
                .then(function (response) {
                        // success
                    },
                    function (response) { // optional
                        // failed
                    });
        };

        this.deletePatientById = function (patient_id) {
            return $http({
                method: "Delete",
                url: 'http://api.cardiacare.ru/patients',
                params: {id: patient_id}
            }).then(function (response) {
                    alert("success");
                },
                function (response) {
                    alert("error");
                });
        };

//        'POST invites' => 'user/invite/create',
//        'OPTIONS invites' => 'user/invite/options',
//        'GET invites' => 'user/invite/index',
//        'GET invites/<id:\d+>' => 'user/invite/view',

        this.postInvite = function (invite) {
            return $http({
                method: "POST",
                url: 'http://api.cardiacare.ru/invites',
                params: invite
            }).then(function (response) {
                    // success
                },
                function (response) { // optional
                    // failed
                });
        };

        this.getInvitesList = function () {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/invites',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (data) {
                return data;
            }, function () {
                alert("error");
                return null;
            });
        };

        this.getInviteById = function (invite_id) {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/invites',
                params: {id: invite_id},
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                return response.data;
            }, function () {
                alert("error");
                return null;
            });
        };


//        'POST survey' => 'survey/questionnaire/create',
//        'OPTIONS survey' => 'survey/questionnaire/options',
//        'GET survey' => 'survey/questionnaire/index',
//        'GET survey/<id:\d+>' => 'survey/questionnaire/view',
//        'OPTIONS survey/<id:\d+>' => 'survey/questionnaire/options',
//        'DELETE survey/<id:\d+>' => 'survey/questionnaire/delete'
        this.postSurvey = function (survey) {
            return $http({
                method: "POST",
                url: 'http://api.cardiacare.ru/survey',
                params: survey
            }).then(function (response) {
                    // success
                },
                function (response) { // optional
                    // failed
                });
        };

        this.getServeyList = function () {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/servey',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                return response.data;
            }, function () {
                alert("error");
                return null;
            });
        };

        this.getServeyById = function (servey_id) {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/servey',
                params: {id: servey_id},
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                return response.data;
            }, function () {
                alert("error");
                return null;
            });
        };

        this.deleteServeyById = function (servey_id) {
            return $http({
                method: "Delete",
                url: 'http://api.cardiacare.ru/servey',
                params: {id: servey_id}
            }).then(function (response) {
                    // success
                },
                function (response) { // optional
                    // failed
                });
        };


//        'POST feedback' => 'survey/feedback/create',
//        'OPTIONS feedback' => 'survey/feedback/options',
//        'GET feedback' => 'survey/feedback/index',
//        'GET feedback/<id:\d+>' => 'survey/feedback/view',
//        'OPTIONS feedback/<id:\d+>' => 'survey/feedback/options',
//        'DELETE feedback/<id:\d+>' => 'survey/feedback/delete'
        this.postFeedback = function (feedback) {
            return $http({
                method: "POST",
                url: 'http://api.cardiacare.ru/feedback',
                params: feedback
            }).then(function (response) {
                    // success
                },
                function (response) { // optional
                    // failed
                });
        };

        this.getFeedbackList = function () {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/feedback',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                return response.data;
            }, function () {
                alert("error");
                return null;
            });
        };

        this.getFedbackById = function (feedback_id) {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/feedback',
                params: {id: feedback_id},
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                return response.data;
            }, function () {
                alert("error");
                return null;
            });
        };

        this.deleteFedbackById = function (feedback_id) {
            return $http({
                method: "Delete",
                url: 'http://api.cardiacare.ru/feedback',
                params: {id: feedback_id}
            }).then(function (response) {
                    // success
                },
                function (response) { // optional
                    // failed
                });
        };

//        'POST bloodpressure' => 'emr/bloodpressure/create',
//        'OPTIONS bloodpressure' => 'emr/bloodpressure/options',
//        'GET bloodpressure' => 'emr/bloodpressure/index',
//        'GET bloodpressure/<id:\d+>' => 'emr/bloodpressure/view',
//        'OPTIONS bloodpressure/<id:\d+>' => 'emr/bloodpressure/options',
//        'DELETE bloodpressure/<id:\d+>' => 'emr/bloodpressure/delete'
        this.postBloodpressure = function (bloodpressure) {
            return $http({
                method: "POST",
                url: 'http://api.cardiacare.ru/bloodpressure',
                params: bloodpressure
            }).then(function (response) {
                    // success
                },
                function (response) { // optional
                    // failed
                });
        };

        this.getBloodpressureList = function () {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/bloodpressure',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                return response.data;
            }, function () {
                alert("error");
                return null;
            });
        };

        this.getBloodpressureById = function (bloodpressure_id) {
            return $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/bloodpressure',
                params: {id: bloodpressure_id},
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                return response.data;
            }, function () {
                alert("error");
                return null;
            });
        };

        this.deleteBloodpressureById = function (bloodpressure_id) {
            return $http({
                method: "Delete",
                url: 'http://api.cardiacare.ru/bloodpressur',
                params: {id: bloodpressure_id}
            })
                .then(function (response) {
                        // success
                    },
                    function (response) { // optional
                        // failed
                    });
        };


    }
})();

