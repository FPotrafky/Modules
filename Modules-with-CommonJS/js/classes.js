
function City () {
    this.cityName = "";

    this.setCity = function(newCityName)
    {
        this.cityName = newCityName;
    };
    this.getCity = function()
    {
        return this.cityName;
    };
}

exports.City = City;