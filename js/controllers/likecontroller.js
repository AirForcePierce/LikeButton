let LikeController = function ($scope) {


  $scope.likeClick = function () {
    $scope.likeCount = $scope.likeCount + 1;

  };


};

LikeController.$inject = ['$scope'];

export default LikeController;
