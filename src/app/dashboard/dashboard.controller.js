(function() {
  'use strict';

  angular
    .module('sManagement')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($timeout, webDevTec, toastr, $scope, $state, $log, $sce) {
    //var vm = this;
  $scope.searchPopover = {
    templateUrl: 'searchPopoverTemplate.html'
  };


  function dashboardConstruction(){
    // Login Nav
    $scope.userName = localStorage.getItem('name');

  }
  dashboardConstruction();

  $scope.logout= function(){
    //function logout(){
      debugger;
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("secretToken");
      $state.go('logout');
    };
  



  }
})();
