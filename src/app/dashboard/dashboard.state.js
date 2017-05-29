(function() {
  'use strict';

  angular
    .module('sManagement')
    .config(stateConfig);

  /** @ngInject */
  function stateConfig($stateProvider) {
    $stateProvider
    .state('dashboard', {
      abstract: true,
      //parent: 'app',
      url: '/dashboard',
      views: {
        'content@': {
          templateUrl: 'app/dashboard/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'vm'
        }
      }
    }) 
  }

})();
