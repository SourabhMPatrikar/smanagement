(function() {'use strict';

  angular.module('sManagement').controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, webDevTec, toastr, $scope, $state, $log, LoginService) {
    var vm = this;
    $scope.loginUser={};
    $scope.loginUser.email="";
    $scope.loginUser.password="";
    $scope.passcheck=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    $scope.signin = function(obj){
    	$log.info('response ', obj);
    	//console.log(obj);
    	LoginService.login(
    		function(response){
    			var accessUser = response;
    			$log.info('response Get', accessUser);
    			if(obj.email === accessUser.email && obj.password === accessUser.password){
                    localStorage.setItem("name", accessUser.name);
                    localStorage.setItem("email", accessUser.email);
                    localStorage.setItem("secretToken", accessUser.secretToken);
    				//alert('credential totally match.')
                    obj={};
    				$state.go('dashboard.defaultDashboard');
    			}
    			else{
    				$state.reload();
    				//alert('credential mismatch.')
    			}
    		},
    		function(err){
    			$log.error('err',err);

    		}
    	);
    };
  }
})();
