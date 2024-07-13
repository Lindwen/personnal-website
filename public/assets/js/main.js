document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const dropdownTrigger = dropdown.querySelector(".dropdown-trigger button");

  dropdownTrigger.addEventListener("click", () => {
    dropdown.classList.toggle("is-active");
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
});

console.log(
  "%cSTOP! ✋ This area is intended for developers.",
  "font-size: 18px; font-weight: 700; color: red;",
);
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let konamiCodePosition = 0;

function checkKonamiCode(event) {
  const key = event.key;

  const requiredKey = konamiCode[konamiCodePosition];

  if (key === requiredKey) {
    konamiCodePosition++;

    if (konamiCodePosition === konamiCode.length) {
      alert("コナミコマンド");
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");

      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
}

document.addEventListener("keydown", checkKonamiCode);
