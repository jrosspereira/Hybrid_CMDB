angular
  .module('movie')
  .controller("ShowController", function ($scope, Movie, supersonic) {
    $scope.movie = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Movie.find($scope.dataId).then( function (movie) {
        $scope.$apply( function () {
          $scope.movie = movie;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.movie.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });