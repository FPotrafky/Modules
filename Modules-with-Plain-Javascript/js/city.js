var City = function(){
    var cityName = "";

    function setCity(newCityName){
        cityName = newCityName;
    }
    function getCity(){
        return cityName;
    }

    return {
        setCity: setCity,
        getCity: getCity
    }
}; // It is NOT an IIFE, therefore this here is NOT a singleton. 
   // It represents a class that has to be instantiated.