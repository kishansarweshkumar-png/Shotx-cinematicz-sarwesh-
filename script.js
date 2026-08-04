// ==========================
// SHOTX CINEMATICZ
// Premium Animation Script
// ==========================

// Fade-in Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Button Animation
const buttons = document.querySelectorAll(".btn,.youtube,.instagram");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// Header Animation
window.addEventListener("load", () => {
  document.querySelector("header").animate(
    [
      { opacity: 0, transform: "translateY(-50px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 1000,
      fill: "forwards"
    }
  );
});

console.log("Shotx Cinematicz Website Loaded Successfully!");
