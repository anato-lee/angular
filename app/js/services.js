'use strict';

/* Services */

var usersServices = angular.module('usersServices', ['ngResource']); 
usersServices.factory('Users', ['$resource',
  function($resource){
    return $resource('users/users.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);