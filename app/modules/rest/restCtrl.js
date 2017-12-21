(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:restCtrl
	* @description
	* # restCtrl
	* Controller of the app
	*/

  	angular
			.module('rest')
			.controller('RestCtrl', RestCtrl);

		RestCtrl.$inject = ['$scope', 'restService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function RestCtrl($scope, restService) {
			/*jshint validthis: true */
			var vm = this;

			vm.error = null;
			vm.repositoriesList = ['reactjs/redux', 'facebook/react'];
			vm.selectedRepository = vm.repositoriesList[0];
			vm.maximumNumberOfPages = 1;
			vm.isFetching = false;
			vm.pullRequests = [];
			
			vm.resetError = function() {
				vm.error = null;
			}

			vm.addRepositoryToList = function() {
				vm.resetError();

				if (vm.newRepository) {
					vm.repositoriesList.push(vm.newRepository);
					vm.selectedRepository = vm.repositoriesList[vm.repositoriesList.length - 1];
					vm.newRepository = null;
					vm.fetchPullRequests();
				} else {
					vm.error = 'Please give a valid repository name.';
				}
			}

			vm.handleInputKeyPress = function(event) {
				if ((event.which || event.keyCode) === 13) {
					vm.addRepositoryToList();
				}
			}

			vm.fetchPullRequests = function() {
				vm.resetError();

				vm.isFetching = true;
				vm.pullRequests = [];

				restService
					.executeGetRequest(`https://api.github.com/repos/${vm.selectedRepository}/pulls?state=all`)
					.then((data) => {
						vm.isFetching = false;

						if (data.status === 0) {
							vm.error = 'the selected repository was not found.';
						} else if (data.status === 1) {
							vm.pullRequests = data.response.data;
							vm.lastUpdated = new Date().toLocaleTimeString();
						}

						// Used to refresh the DOM elements after the new value of the pull requests' array,
						// since we need to iterate it again with ng-repeat.
						$scope.$apply();
					});
			}

			vm.fetchPullRequests();
		}

})();
