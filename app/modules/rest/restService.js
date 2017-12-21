(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:restService
	 * @description
	 * # restService
	 * Service of the app
	 */

  	angular
		.module('rest')
		.factory('restService', restService);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		restService.$inject = ['$http'];

		function restService ($http) {
			return {
				executeGetRequest: executeGetRequest,
			};

			function executeGetRequest(urlString) {
				return new Promise((resolve) => {
					console.log(`Fetching ${urlString}...`);
	
					// Simple GET request example:
					$http({
						method: 'GET',
						url: urlString,
						headers: {
							'Accept': 'application/vnd.github.v3+json',
						}
					}).then(function successCallback(response) {
							// this callback will be called asynchronously
							// when the response is available
							resolve({
								status: 1, 
								response,
							});
						}, function errorCallback(response) {
							// called asynchronously if an error occurs
							// or server returns response with an error status.
							resolve({
								status: 0, 
								response,
							});
						});
				});
			}
		}

})();
