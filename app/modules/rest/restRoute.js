'use strict';

/**
 * @ngdoc function
 * @name app.route:restRoute
 * @description
 * # restRoute
 * Route of the app
 */

angular.module('rest')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.rest', {
				url:'/rest',
				templateUrl: 'app/modules/rest/rest.html',
				controller: 'RestCtrl',
				controllerAs: 'vm'
			});

		
	}]);
