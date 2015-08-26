angular
  .module('movie')
  .controller("NewController", function ($scope, Movie, supersonic) {
    $scope.movie = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newmovie = new Movie($scope.movie);
      newmovie.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });