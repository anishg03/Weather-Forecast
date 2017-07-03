//Routes
weatherApp.config(function($routeProvider){
    
   $routeProvider
   .when('/', {
       templateUrl: 'Pages/home.html',
       controller: 'homeController'
   })
   .when('/forecast', {
       templateUrl: 'Pages/forecast.html',
       controller: 'forecastController'
   })
   .when('/forecast/:days', {
       templateUrl: 'Pages/forecast.html',
       controller: 'forecastController'
   })
    
});