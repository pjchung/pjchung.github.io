(function() {
  var questionsapp = angular.module('questionsApp', []);

  questionsapp.controller('QuestionsCtrl', function($scope) {
    $scope.hideAnswer = false;
  });
})();