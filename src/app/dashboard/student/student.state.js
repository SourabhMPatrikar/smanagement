(function() {
  'use strict';
  angular
    .module('sManagement')
    .config(stateConfig);

  /** @ngInject */
  function stateConfig($stateProvider) {
    //debugger;
    $stateProvider
    .state('dashboard.studentList', {
      //parent: 'dashboard',
      url: '/studentList',
      data: {
        pageTitle: 'Student List'
      },
      views: {
        'dashboardContent@dashboard': {
          templateUrl: 'app/dashboard/student/studentList/studentList.html',
          controller: 'studentListController',
          controllerAs: 'vm'
        }
      }
    })
    .state('dashboard.viewStudentProfile', {
      //parent: 'dashboard',
      url: '/viewStudentProfile/:id',
      data: {
        pageTitle: 'Student Profile'
      },
      views: {
        'dashboardContent@dashboard': {
          templateUrl: 'app/dashboard/student/viewProfile/viewProfile.html',
          controller: 'viewStudentProfileController',
          controllerAs: 'vm'
        }
      }
    }) 
    .state('dashboard.addStudent', {
      //parent: 'dashboard',
      url: '/addStudent',
      data: {
        pageTitle: 'Add Student'
      },
      views: {
        'dashboardContent@dashboard': {
          templateUrl: 'app/dashboard/student/addStudent/addStudent.html',
          controller: 'AddStudentController',
          controllerAs: 'vm'
        }
      }
    }) 
  }

})();

