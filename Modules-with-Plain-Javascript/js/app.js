(function()
{
    person.setName("Toni Schumacher");
    var fullName = person.getName();

    document.getElementById("fullname").innerHTML = fullName;
    
    var city1 = new City();
    city1.setCity("Menden");

    document.getElementById("city1").innerHTML = city1.getCity();

    var city2 = new City();
    city2.setCity("Iserlohn");

    document.getElementById("city2").innerHTML = city2.getCity();

    var city3 = new City();
    city3.setCity("Hemer");

    document.getElementById("city3").innerHTML = city3.getCity();
})();