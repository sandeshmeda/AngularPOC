(function() {

  var name = "app",
    requires = ["app.shell",
                "app.search",
                "app.weather",
                "app.forecast",
                "app.component"
    ];

  angular.module(name, requires);


})();