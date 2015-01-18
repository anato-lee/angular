'use strict';

/* App Module */
var coachingApp = angular.module('coachingApp', ['ngRoute', 'coachingAppControllers', 'usersServices']);
coachingApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when('/users', {
			templateUrl: 'partials/users.html',
			controller: 'UsersCtrl'
		}).
		otherwise({
			redirectTo: '/users'
		})
	
}])