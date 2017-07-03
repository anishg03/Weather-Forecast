//Controllers
weatherApp.controller('homeController', ['$scope', 'cityService', '$location', function($scope, cityService, $location){
    
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path("/forecast");
    };
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', '$routeParams', 'weatherService', function($scope, $resource, cityService, $routeParams, weatherService){
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPPID = '865a5a0bb08f16540c9ae455d4458616';
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days, $scope.weatherAPPID);
    
    $scope.convertToFahrenheit = function(degK){
        return Math.round((1.8 * (degK - 273)) + 32);
    };
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    };
    
}]);