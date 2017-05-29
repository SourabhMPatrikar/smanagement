(function() {
  'use strict';

  angular
    .module('sManagement')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
    .state('dashboard.defaultDashboard', {
      // abstract: true,
      parent: 'dashboard',
      url: '/defaultDashboard',
      views: {
        'dashboardcontent@dashboard': {
          templateUrl: 'app/dashboard/defaultDashboard/defaultDashboard.html',
          controller: 'DefaultDashboardController',
          controllerAs: 'vm'
        }
      }
    }) 
  }

})();
