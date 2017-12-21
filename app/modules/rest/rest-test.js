(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:restTest
	 * @description
	 * # restTest
	 * Test of the app
	 */

	describe('rest test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('test-angular');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('RestCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
