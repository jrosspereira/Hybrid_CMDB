angular
  .module('movie')
  .controller("EditController", function ($scope, Movie, supersonic) {
    $scope.movie = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Movie.find(steroids.view.params.id).then( function (movie) {
      $scope.$apply(function() {
        $scope.movie = movie;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.movie.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
