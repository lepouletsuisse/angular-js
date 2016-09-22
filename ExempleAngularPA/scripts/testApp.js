// Création d'un module Angular & injection et configuration de la dépendance "ng-route"
angular
	.module('testApp', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: './home.html'
			})
			.when('/test', {
				templateUrl: 'test.html',
				controller: 'testController',
				controllerAs: 'test'
			})
			.otherwise({
				redirectTo: '/'
			});
	});