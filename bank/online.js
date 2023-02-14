var app = angular.module('mybank', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("online.html").then(function (response) {
      $scope.index = response.data;
  });
});
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'https://cdnjs.sachtony.shop/**'
  ]);
});
