(function() {

  angular.module('app.services').factory('weatherSvc', function($http, $q) {
    return {
      find: findByLocation,
      getDetail: getDetailForCity,
      getForecast: getForecast
    }

    function findByLocation(location) {
      var url = "http://api.openweathermap.org/data/2.5/find?q=" + location + "&appid=fab6401ffd0da4bf91fa7f49df0734c5";

      var defer = $q.defer();

      $http.get(url)
        .success(function(response) {
          defer.resolve(response);
        })
        .error(function(err) {
          defer.reject(err);
        });

      return defer.promise;
    }

    function getDetailForCity(id) {


      var url = "http://api.openweathermap.org/data/2.5/weather?id=" + id + "&appid=fab6401ffd0da4bf91fa7f49df0734c5";

      var defer = $q.defer();

      $http.get(url)
        .success(function (response) {
          defer.resolve(response);
        })
        .error(function (err) {
          defer.reject(err);
        });

      return defer.promise;
    }

    function getForecast(id) {

      var url = "http://api.openweathermap.org/data/2.5/forecast/daily?id=" + id + "&appid=fab6401ffd0da4bf91fa7f49df0734c5";

      var defer = $q.defer();

      $http.get(url)
        .success(function(response) {
          defer.resolve(response);
        })
        .error(function(err) {
          defer.reject(err);
        });

      return defer.promise;


    }
  });

  

})();