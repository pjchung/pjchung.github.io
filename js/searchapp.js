(function() {
  var searchApp = angular.module("searchApp", []);
  
  searchApp.config([
    // Use '{(' and ')}' to avoid conflict with liquid tags
    '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
  ]);
 
  // Gets the search.json file and attaches it to SearchCtrl's search model
  searchApp.controller('SearchCtrl', function($scope, $http) {
    $http.get('/search.json')
      .then(function(results) {
        $scope.search = results.data;
      });
  });
})();