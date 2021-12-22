const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue",
};
person.nationality = "English";

const newValue = person.firstname + " is " + person.nationality + ".";

document.getElementById("demo").innerHTML = newValue;
