angular.module('whatNext.directives')
	.directive('displays', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/displaysDirective.html'
		};

	})
	.directive('appinfo', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/appDetailDirective.html'
		};
	})
	.directive('buttonrow', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/buttonRowDirective.html'
		};
	});