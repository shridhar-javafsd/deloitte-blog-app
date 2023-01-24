'use strict';

angular.
  module('blogDetail').
  component('blogDetail', {
    templateUrl: 'blog-detail/blog-detail.template.html',
    controller: ['$routeParams', '$http',
      function BlogDetailController($routeParams, $http) {
        var self = this;
        self.blogId = $routeParams.id;
        $http.get(`https://jsonplaceholder.typicode.com/posts/${self.blogId}`)
          .then((response) => {
            console.log(response);
            self.blog = response.data;
            self.dummyArray = response.data.body.split(' ');
            console.log(self.blog);
          })
          .catch(err => alert(`This blog not found!`));
      }
    ]
  });


