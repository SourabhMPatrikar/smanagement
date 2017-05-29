(function() {
  'use strict';

  angular
    .module('sManagement')
    .config(stateConfig);

  /** @ngInject */
  function stateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      abstract: true
    });
    $urlRouterProvider.otherwise('login');
    // $stateProvider
    //   .state('login', {
    //     url:'/',
    //     templateUrl:'app/authentication/login/login.html',
    //     controller:'LoginController',
    //     controllerAs:'this'
    //   })
    //   .state('main', {
    //     url: '/main',
    //     templateUrl: 'app/main/main.html',
    //     controller: 'MainController',
    //     controllerAs: 'main'
    //   })
    //   .state('main.student',{
    //     url:'/student',
    //     templateUrl:'/app/main/student/student/student.html',
    //     controller:'StudentController',
    //     controllerAs:'vm'
    //   })
    //   .state('main.addStudent', {
    //     url: '/addStudent',
    //     templateUrl: 'app/main/student/addStudent/addStudent.html',
    //     controller: 'AddStudentController',
    //     controllerAs: 'vm'
    //   })
    //   .state('main.student.viewProfile', {
    //     url: '/viewProfile/:id',
    //     templateUrl: 'app/main/student/viewProfile/viewProfile.html',
    //     controller: 'viewProfileController',
    //     controllerAs: 'vm'
    //   })
    //   .state('main.teacher',{
    //     url :'/teacher',
    //     templateUrl:'app/main/teacher/teacher/teacher.html',
    //     controller:'TeacherController',
    //     controllerAs:'vm'
    //   })
    //   .state('main.addTeacher',{
    //     url:'/addTeacher',
    //     templateUrl:'app/main/teacher/addTeacher/addTeacher.html',
    //     controller:'AddTeacherController',
    //     controllerAs:'vm'
    //   })
    //   ;

    // $urlRouterProvider.otherwise('/');
  }

})();
