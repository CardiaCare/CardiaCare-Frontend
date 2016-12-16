(function(){

  angular
    .module('app')
    .controller('LoginController', ['$scope', '$http', '$base64',
      LoginController
    ]);

  function LoginController($scope, $http, $base64) {
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

		$http({
		    method: 'POST',
		    url: 'http://api.cardiacare.ru/tokens',
		    headers: {
		    	'Content-Type': 'application/json',
		    	'Accept': 'application/json'
		    },
		    data: authData
		}).then(function successCallback(response) {
			$http.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"};
			/*
			* Server side authentication is a little bit stupid
			* So the workflow is following:
			* We get token using /tokens request
			* Our token is (suddenly!) is new login
			* Basic auth requires login and password encoded with base64 / e.g. base64(login:password) /
			* As we don't have a password we just concatenate our token and ":"
			* FIXME: It's needed to be in separated service or smth like this
			*/
			$http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode(response.data+":");
			test();
		}, function errorCallback(response) {
			alert('Error occured');
		});

        var test = function(){
        	$http({
                method: 'GET',
                url: 'http://api.cardiacare.ru/patients',
                 headers: {
			    	'Content-Type': 'application/json',
			    	'Accept': 'application/json'
			    }
            }).then(function successCallback(response) {
            	console.log(response);
            }, function errorCallback(response) {
           		console.log(response);
                alert('ERROR');
           
            });
        };
    };
  }

})();
