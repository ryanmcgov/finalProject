angular.module('whatNext')
	.factory('GitServices', function($resource) {
		return $resource('https://api.github.com/users/eastcoastsb/starred', {}, {
			gitInfo: {
				method: 'GET',
				isArray: true
			}
		});
	});