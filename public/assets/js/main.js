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
