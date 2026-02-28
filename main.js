const navbar = document.getElementById("navbar");
  const header = document.getElementById("mainHeader");

  function toggleMenu() {
    navbar.classList.toggle("active");
  }

  // Cursor headerdan chiqsa yopiladi
  header.addEventListener("mouseleave", function () {
    navbar.classList.remove("active");
  });