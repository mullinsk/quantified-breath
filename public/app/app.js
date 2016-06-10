'use strict';

angular
	.module('pft-app', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.otherwise({redirectTo: '/index'})
	}]);