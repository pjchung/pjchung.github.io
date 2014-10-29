(function() {
  var questionsapp = angular.module('questionsApp', ['mm.foundation']);

  questionsapp.controller('QuestionsCtrl', function($scope) {
    $scope.hideAnswer = false;
  });
})();