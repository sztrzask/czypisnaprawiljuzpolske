angular
.module('pisApp', [])
  .controller('SearchController', function ($scope, $http) {
    var search = this;
    $scope.lies = [];
    $http.get('data/data.html').success(function (data) {
      $scope.lies = data;
    });
    $scope.query;
    $scope.resultLimit = 100;
  });