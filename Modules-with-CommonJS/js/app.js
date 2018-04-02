
var person = require("./person.js")
var classes = require("./classes.js")

person.setName("Toni Schumacher");
var fullName = person.getName();

document.getElementById("fullname").innerHTML = fullName;

var city1 = new classes.City();
city1.setCity("Menden");
document.getElementById("city1").innerHTML = city1.getCity();

var city2 = new classes.City();
city2.setCity("Iserlohn");
document.getElementById("city2").innerHTML = city2.getCity();
