angular.module('whatNext')
	.factory('GitServices', function($resource) {
		return $resource('https://api.github.com/users/eastcoastsb/starred', {}, {
			gitInfo: {
				method: 'GET',
				isArray: true
			}
		});
	})
	.factory('Projects', function($firebase, FBURL) {
		var projects = $firebase(FBURL + 'projects');
		var projectId = 

		var Projects = {
			all: projects,
			find: 
		}


	})