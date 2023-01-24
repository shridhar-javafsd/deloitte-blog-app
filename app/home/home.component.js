'use strict';

angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: [
      function HomeController() {
        const homeStuff = this;
        homeStuff.appName = 'Deloitte Blog App';
      }
    ]
  });


