let container = document.getElementById("container");
let colors = ["blue", "red", "yellow", "purple", "green", "pink", "orange"];

let squares = 500;

for (let i = 0; i < squares; i++) {
  let square = document.createElement("div");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  square.classList.add("square");

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}
