const car = { type: "Fiat", model: "500", color: "white" };

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";
var ownerAndColor = "Car owner is " + car.owner + ", color is " + car.color;
var typeAndModel = ", type is " + car.type + " " + car.model;
var newValue = ownerAndColor + typeAndModel;
// Display the property:
document.getElementById("demo").innerHTML = newValue;
