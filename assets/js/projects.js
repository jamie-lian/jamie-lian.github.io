document.addEventListener("DOMContentLoaded", () => {

  const projectCards = document.querySelectorAll(".project-card");


  projectCards.forEach((card) => {

    const toggle = card.querySelector(".project-toggle");


    toggle.addEventListener("click", () => {

      const isExpanded = card.classList.contains("is-expanded");


      // Close all other cards
projectCards.forEach((otherCard) => {

  otherCard.classList.remove("is-expanded");

  const otherToggle =
    otherCard.querySelector(".project-toggle");

  const otherExpand =
    otherCard.querySelector(".project-expand");

  otherToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  otherExpand.textContent = "+";

});


      // Open the selected card
if (!isExpanded) {

  card.classList.add("is-expanded");

  toggle.setAttribute(
    "aria-expanded",
    "true"
  );

  const expandIcon =
    card.querySelector(".project-expand");

  expandIcon.textContent = "−";

}

    });

  });

});