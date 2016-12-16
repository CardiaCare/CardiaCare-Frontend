(function(){

  angular
    .module('app')
    .controller('LoginController', ['$scope', '$http', 'basicAuthService',
      LoginController
    ]);

  function LoginController($scope, $http, basicAuthService) {
    var vm = this;

    vm.credentials = {};
    
    vm.login = function() {
        var email = vm.credentials.email;
        var password = vm.credentials.password;
        
        if(email === '' || password === ''){
            alert("Empty credentials");
            return;
        }
        
        
        var authData = {email: email, password: password};

        var successCB = function(response) {
            // Work with extra data coming from the remote server
//            $scope.generatedKey = response.data.generatedKey;
            $http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/patients'
            }).then(function successCallback(response) {
               console.log(JSON.stringify(response));
              // this callback will be called asynchronously
              // when the response is available
            }, function errorCallback(response) {
                alert('ERROR');
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
            
        };

        var failureCB = function(error) {
            alert('ERROR'); //TODO:
        };
        //TODO: to config
        basicAuthService.login('http://api.cardiacare.ru/tokens', authData, successCB, failureCB);
    };
  }

})();
