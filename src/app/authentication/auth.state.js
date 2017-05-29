(function() {
  'use strict';

  angular
    .module('sManagement')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
    .state('auth', {
      abstract: true        
    }) 
  }

})();
