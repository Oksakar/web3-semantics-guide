function getRandEvent() {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
}

function logEvent(stringForName, stringForResult) {
  console.log(`${stringForName}'s event is: ${stringForResult}`);
}

const event2 = getRandEvent();
const name2 = "Nala";

logEvent(name2, event2);
logEvent("masha", "vasya");
