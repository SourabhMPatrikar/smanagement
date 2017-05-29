(function(){
	'user strict';
	angular.module('sManagement').factory('TeacherService',TeacherService);
	function TeacherService($http, $q, $resource, APP_CONSTANT){
		var teacherUrl = APP_CONSTANT.Url;

		var service = $resource(
			"",
			{},
			{
				teacher:{
					method : "GET",
					url : teacherUrl + "/teacherService.json"
				}
			}
		) 
		return service;
	}
})();