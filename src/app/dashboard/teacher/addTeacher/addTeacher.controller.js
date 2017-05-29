(function() {
  'use strict';

  angular
    .module('sManagement')
    .controller('StudentController', StudentController);

  /** @ngInject */
  function StudentController($timeout, webDevTec, toastr, $scope, $state, $http, $log, StudentService) {
    var vm = this;

    	//$log.info('response ', obj);
      //var studentData;
      function getDefaultDashboardData(){
        StudentService.student(
          function(response){
          
            $scope.record = response.cd;
             $log.info("ass",$scope.record);
          },
          function(err){
           //$log.error('err',err);
          }
        );
      }
      getDefaultDashboardData();
  }
})();
