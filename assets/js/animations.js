document.addEventListener("DOMContentLoaded", () => {

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }

      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });


  // Stagger project cards
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 200}ms`;
  });

  // Navigation scroll effect
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }

});

});

// Stagger fact cards
const factCards = document.querySelectorAll(".fact-card");

factCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 200}ms`;
});