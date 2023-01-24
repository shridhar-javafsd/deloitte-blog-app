'use strict';

angular.
  module('DeloitteBlogApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/blogs', {
          template: '<blog-list></blog-list>'
        }).
        when('/blogs/:id', {
          template: '<blog-detail></blog-detail>'
        }).
        when('/home', {
          template: '<home></home>'
        }).
        when('/', {
          template: '<home></home>'
        }).
        otherwise('/home');
    }
  ]);

