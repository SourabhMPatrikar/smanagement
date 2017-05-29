(function() {
  'use strict';

  angular
    .module('sManagement')
    .config(stateConfig);

  /** @ngInject */
  function stateConfig($stateProvider) {
    $stateProvider
    .state('login', {
      parent: 'auth',
      url: '/login',
      data:{
        pageTitle : 'Login'
      },
      views : {
        'content@':{
          templateUrl:'app/authentication/login/login.html',
          controller:'LoginController',
          controllerAs:'vm'
        } 
      }
    }) 
  }

})();
