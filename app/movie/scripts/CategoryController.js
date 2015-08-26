angular
  .module('movie')
  .controller("CategoryController", function ($scope, Movie, supersonic) {
    $scope.title = 'Categories';
    $scope.categoryList = [{
                               name: 'Comedy',
                               image: 'fun.png'
                          },
                          {
                               name: 'Romance',
                               image: 'romance.png'
                          },
                          {
                               name: 'Action',
                               image: 'action.png'
                          },
                          {
                               name: 'Drama',
                               image: 'drama.png'
                          },
                          {
                               name: 'Adventure',
                               image: 'adventure.png'
                          },
                          {
                               name: 'Horror',
                               image: 'horror.png'
                          },
                          {
                               name: 'Mystery',
                               image: 'mystery.png'
                          },
                          {
                               name: 'History',
                               image: 'west.png'
                          }                      ];

    $scope.movies = null;
    $scope.showSpinner = true;


  });