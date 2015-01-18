'use strict';

/* Controllers */
var coachingAppControllers = angular.module('coachingAppControllers', []);

coachingApp.controller('UsersCtrl', ['$scope', 'Users', function($scope, Users){
	$scope.users = Users.query();
	$scope.order = 'lastName';
}])