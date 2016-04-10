(function() {

  var name = "app",
    requires = ["app.shell",
                "app.search",
                "app.weather",
                "app.forecast",
                "app.component",
                "app.services"
    ];

  angular.module(name, requires);


})();