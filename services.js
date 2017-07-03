//Services
weatherApp.service('cityService', function(){
    
   this.city = "New York, NY"; 

});

weatherApp.service('weatherService', ['$resource', function($resource){
    this.GetWeather = function(city, days, key){
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily');
        return weatherAPI.get({ q: city, cnt: days, appid: key });
    };
}]);