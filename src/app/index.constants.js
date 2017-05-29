/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('sManagement')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
	.constant('APP_CONSTANT',{
		loginURL:'http://localhost:3000/app/data/authentication',
			 url:'http://localhost:3000/app/data/application'
	});

})();