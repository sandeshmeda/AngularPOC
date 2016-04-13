(function() {

  angular.module('app.forecast').controller('Forecast', function ($scope, weatherSvc, $routeParams) {

    $scope.forecast = null;
    $scope.getTime = getTime;

    if ($routeParams.id !== null)
      getForecast($routeParams.id);


    function getForecast(id) {
      weatherSvc.getForecast(id).then(function(data) {
        console.log(data);
        $scope.forecast = data;
      });
    }

    function getTime(dt) {
      return new Date(dt * 1000);
    }

  });

})();