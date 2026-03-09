// Wait for DOM
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Circle Animation
  gsap.from("#contactCircle", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "footer",
      start: "top 80%",
    },
  });

  // 2. CTA Text Animation
  gsap.from("#ctaContent", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    scrollTrigger: {
      trigger: "#ctaContent",
      start: "top 90%",
    },
  });

  // 3. Footer Columns Stagger
  gsap.from(".reveal-col", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".footer-links-grid",
      start: "top 90%",
    },
  });

  // 4. Divider Animation
  gsap.from("#divider", {
    width: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#divider",
      start: "top 95%",
    },
  });

  // Back to Top functionality
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
