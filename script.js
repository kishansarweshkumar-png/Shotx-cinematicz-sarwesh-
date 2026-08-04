// ===== Scroll Animation =====

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// ===== Header Animation =====

window.addEventListener("load", () => {
    document.querySelector("header").classList.add("show");
});

// ===== Button Hover Effect =====

const buttons = document.querySelectorAll(".btn, .social a");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});
