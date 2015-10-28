(function () {
  angular
    .module('pisApp', ['ngMaterial'])
    .controller('SearchController', SearchController);
    
    function SearchController($scope, $http) 
    {
      var self = this;
      self.lies = [];
      $http.get('data/data.html').success(function (data) {
        self.lies = data;
      });
      self.query;
      self.resultLimit = 100;
    }
})();