const mapRange = (a1, a2, b1, b2, value) => {
  const inRange = a2 - a1;
  const outRange = b2 - b1;
  const func = (v) => b1 + (((v - a1) / inRange) * outRange || 0);
  return value || value === 0 ? func(value) : func;
};

const BOUNDS = 90;
const UPDATE = ({ x: pointerX, y: pointerY }) => {
  const x = mapRange(0, window.innerWidth, -BOUNDS, BOUNDS, pointerX);
  const y = mapRange(0, window.innerHeight, BOUNDS, -BOUNDS, pointerY);
  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--y", y);
};
const CHEER = new Audio("kids_cheering_dcLCUDhB.mp3");
CHEER.volume = 0.5;
const INPUT = document.querySelector("input");
let count = 0;
INPUT.addEventListener("change", () => {
  if (count === 0) {
    if (INPUT.checked) {
      CHEER.currentTime = 0;
      CHEER.play();
    }
  }
  count += 1;
});

window.addEventListener("pointermove", UPDATE);
