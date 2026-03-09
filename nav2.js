document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("stkly-hamburger");
  const closeBtn = document.getElementById("stkly-close-btn");
  const overlay = document.getElementById("stkly-overlay");
  const body = document.body;

  const menuLinks = document.querySelectorAll(".stkly-mobile-link");
  const dropdownToggles = document.querySelectorAll(".stkly-mobile-toggle");

  /* ---------- OPEN / CLOSE MOBILE MENU ---------- */

  const toggleMenu = () => {
    hamburger.classList.toggle("stkly-is-active");
    overlay.classList.toggle("stkly-menu-open");
    body.classList.toggle("stkly-no-scroll");
  };

  const closeMenu = () => {
    hamburger.classList.remove("stkly-is-active");
    overlay.classList.remove("stkly-menu-open");
    body.classList.remove("stkly-no-scroll");
  };

  hamburger.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", closeMenu);

  /* ---------- MOBILE DROPDOWN ---------- */

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      const parent = this.parentElement;

      parent.classList.toggle("active");
    });
  });

  /* ---------- CLOSE MENU WHEN NORMAL LINK CLICKED ---------- */

  menuLinks.forEach((link) => {
    if (!link.classList.contains("stkly-mobile-toggle")) {
      link.addEventListener("click", closeMenu);
    }
  });

  /* ---------- ESC KEY CLOSE ---------- */

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("stkly-menu-open")) {
      closeMenu();
    }
  });
});
