(function(){
	'user strict';
	angular.module('sManagement').factory('LoginService', LoginService);
	function LoginService($http, $q, $resource, APP_CONSTANT){
		var loginUrl = APP_CONSTANT.loginURL;
		//var url = APP_CONSTANT.url;

		var service = $resource(
			"",
			{},
			{
				login:{
					method : "GET",
					url : loginUrl + "/loginService.json"
				}
			}
		)
		return service;
	}
})();


