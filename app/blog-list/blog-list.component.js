'use strict';

angular.
  module('blogList').
  component('blogList', {
    templateUrl: 'blog-list/blog-list.template.html',
    controller: ['$http', function BlogListController($http) {
      var self = this;
      self.orderProp = 'id';
      $http.get('https://jsonplaceholder.typicode.com/posts/').then(function (response) {
        console.log(response.data.length);
        self.blogs = response.data;
      });
    }]
  });
