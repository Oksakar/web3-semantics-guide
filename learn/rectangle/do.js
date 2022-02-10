// const rect = document.body.querySelector("div.rectangle");
// let x = 0;
// let y = 0;

function listenKeYPress(event) {
  console.log(event.key);
}

// function changePosition() {
//   rect.style.left = `${Math.random() * 100}px`;
//   rect.style.top = `${Math.random() * 100}px`;
// }

document.addEventListener("keydown", listenKeYPress);
// setInterval(changePosition, 1000);
