var pjchungApp = angular.module("pjchungApp", ['mm.foundation']);

var TopBarCtrl = function ($scope){  
};

pjchungApp.config([
  // Use '{(' and ')}' to avoid conflict with liquid tags
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);

// Gets the search.json file and attaches it to SearchCtrl's search model
pjchungApp.controller('SearchCtrl', function($scope, $http) {
  $http.get('/search.json')
  .then(function(results) {
    $scope.search = results.data;
  });
});

pjchungApp.controller('QuestionsCtrl', function($scope, $http) {
  $scope.hideAnswer = false;
  $http.get('/questions/esophagus-diaphgram/esophagus-diaphgram.json').success(function (data) {
    $scope.esophagusQuestions = data;
  });
});