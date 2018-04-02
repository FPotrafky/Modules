import {Person} from "./person";

console.log("Hallo");

let person = new Person("Frank","Potrafky");

let element:HTMLElement = <HTMLElement>document.getElementById("fullname");
element.innerHTML = person.FullName;