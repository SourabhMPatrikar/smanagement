(function() {
  'use strict';

  angular
    .module('sManagement')
    .controller('viewStudentProfileController', viewStudentProfileController);

  /** @ngInject */
  function viewStudentProfileController($timeout, webDevTec, toastr, $scope, $state, $http, $log, $filter, ViewProfileService) {
    var vm = this;

      ViewProfileService.viewProfile(
        function(response){          
            $scope.record = response.studentList;
            console.log('studentById',$scope.record);       
        },
        function(err){
            $log.error('err',err);
        }
    );
  }
})();