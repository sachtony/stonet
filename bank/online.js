var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("index.html").then(function (response) {
      $scope.index = response.data;
  });
});
