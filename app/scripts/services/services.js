angular.module('whatNext')
	.factory('GitServices', function($resource) {
		return $resource('https://api.github.com/users/eastcoastsb/starred', {}, {
			gitInfo: {
				method: 'GET',
				isArray: true
			}
		});
	})
	.factory('getProjects', ['$firebase', 'FBURL', function($firebase, FBURL) {
			var ref = new Firebase(FBURL);
			var allProjects = $firebase(ref);

			var getAllProjects = function() {
				return allProjects;
			};
		

	}]);