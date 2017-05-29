(function() {
  'use strict';

  angular
    .module('sManagement')
    .controller('TeacherController', TeacherController);

  /** @ngInject */
  function TeacherController($timeout, webDevTec, toastr, $scope, $state, $http, $log, StudentService) {
    var vm = this;

    	//$log.info('response ', obj);
      //var studentData;
      function getDefaultTeacherListData(){
        TeacherService.teacher(
          function(response){          
            $scope.record = response.teacherList;
            $log.info("ass",$scope.record);
          },
          function(err){
           $log.error('err',err);
          }
        );
      }
      getDefaultTeacherListData();
  }
})();
