(function(){
	'user strict';
	angular.module('sManagement').factory('ViewProfileService', ViewProfileService);
	function ViewProfileService($http, $q, $resource, APP_CONSTANT){
		var studentUrl= APP_CONSTANT.url;
		

		var service = $resource(
			"",
			{},
			{
				viewProfile:{
					method:"GET",
					url : studentUrl + "/studentService.json"
				}
			}
		)
		return service;
	}
})();