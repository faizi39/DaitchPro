document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navAuth = document.querySelector(".nav-auth");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navAuth.classList.toggle("open");
  });
});
