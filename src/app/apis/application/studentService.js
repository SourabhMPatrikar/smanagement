(function(){
	'user strict';
	angular.module('sManagement').factory('StudentService', StudentService);
	function StudentService($http, $q, $resource, APP_CONSTANT){
		var studentUrl= APP_CONSTANT.url;		

		var service = $resource(
			"",
			{},
			{
				student:{
					method : "GET",
					url : studentUrl + "/studentService.json"
				}
			}
		)
		return service;
	}
})();