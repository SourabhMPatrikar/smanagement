(function() {
  'use strict';

  angular
    .module('sManagement')
    .config(stateConfig);

  /** @ngInject */
  function stateConfig($stateProvider) {
    $stateProvider
    .state('logout', {
      parent: 'auth',
      url: '/logout',
      data:{
        pageTitle : 'logout'
      },
      views : {
        'content@':{
          templateUrl:'app/authentication/logout/logout.html',
          controller:'LogoutController',
          controllerAs:'vm'
        } 
      }
    }) 
  }

})();
