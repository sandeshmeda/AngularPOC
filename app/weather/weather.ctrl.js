(function() {

  angular.module('app.weather')
    .controller('Weather', function($scope, $routeParams, weatherSvc) {

      $scope.details = null;
      $scope.getTime = getTime;

      var id = null;

      if ($routeParams.id !== undefined)
        id = $routeParams.id;

      weatherSvc.getDetail(id).then(function(data) {
        console.log(data);
        $scope.details = data;
      }, function(err) {
        console.log(err);
      });

      function getTime(dt) {
        return new Date(dt * 1000);
      }

    });

})();