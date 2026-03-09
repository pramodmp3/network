// Handle sticky navbar shadow on scroll
const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Logic
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");
const toggleIcon = mobileToggle.querySelector("i");
const body = document.body;

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  body.classList.toggle("menu-open"); // Prevent scroll

  if (navMenu.classList.contains("active")) {
    toggleIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    toggleIcon.classList.replace("fa-xmark", "fa-bars");
  }
});

// Mobile Dropdown Toggle Logic
document.querySelectorAll(".nav-item").forEach((item) => {
  const link = item.querySelector(".nav-link");
  if (item.querySelector(".dropdown")) {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        item.classList.toggle("active");
        // Rotate chevron icon
        const icon = link.querySelector("i");
        if (item.classList.contains("active")) {
          icon.style.transform = "rotate(180deg)";
        } else {
          icon.style.transform = "rotate(0deg)";
        }
      }
    });
  }
});

// Close menu when clicking a standard link (mobile)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    // If it's the contact button or a link without dropdown, close menu
    if (
      !link.parentElement.querySelector(".dropdown") ||
      window.innerWidth > 1024
    ) {
      navMenu.classList.remove("active");
      body.classList.remove("menu-open");
      toggleIcon.classList.replace("fa-xmark", "fa-bars");
    }
  });
});
