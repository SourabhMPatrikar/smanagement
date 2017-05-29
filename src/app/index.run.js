(function() {
  'use strict';

  angular
    .module('sManagement')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
