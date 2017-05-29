(function() {
  'use strict';

  angular
    .module('sManagement')
    .controller('studentListController', studentListController);

  /** @ngInject */
  function studentListController($timeout, webDevTec, toastr, $scope, $state, $http, $log, StudentService) {
    var vm = this;
   // console.log('StudentService');

      /* Student Grid Data*/
      function getDefaultStudentListData(){
        StudentService.student(
          function(response){          
              vm.record = response.studentList;
              //console.log('asdfgh',$scope.record);
              //$log.info("studentList",$scope.record);

              // /* Pagination*/
              var totalStudent  = vm.record.length,
                  itemInPage    = 10,
                  numPagenation = parseInt(totalStudent/itemInPage);

                  vm.totalItems = totalStudent;
                  vm.itemsPerPage = itemInPage;
                  vm.maxSize = 4;
                  vm.currentPage = 1;
                  vm.numPages = numPagenation;
                  // $scope.fullName=function(firstName,lastName){
                  //   return $scope.firstName + " " + $scope.lastName;
                  // };

                  // $scope.setPage = function (pageNo) {
                  //   $scope.currentPage = pageNo;
                  // };

                  // $scope.pageChanged = function() {
                  //   console.log('Page changed to: ' + $scope.currentPage);
                  // };
                  $scope.$watch('vm.currentPage + vm.itemsPerPage', function() {
                    var begin = ((vm.currentPage - 1) * vm.itemsPerPage), 
                        end = begin + vm.itemsPerPage;                
                        vm.filteredRecord = vm.record.slice(begin, end);
                        //$scope.recNo = indexOf(this);
                  });
          },
          function(err){
              $log.error('err',err);
          }
        );
      }
      getDefaultStudentListData();

      /* Student Dropdown*/
      // $scope.StudentGridActionItems = [
      //   'View Profile',
      //   'Delete Profile',
      //   'Setting'
      // ];












  }
})();