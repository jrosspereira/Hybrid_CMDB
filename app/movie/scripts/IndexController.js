angular
  .module('movie')
  .controller("IndexController", function ($scope, Movie, supersonic) {
    $scope.movies = null;
    $scope.showSpinner = true;

    Movie.all().whenChanged( function (movies) {
        $scope.$apply( function () {
          $scope.movies = movies;
          $scope.showSpinner = false;
        });
    });
  });