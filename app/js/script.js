"use strict";
/**
 * JS Test
 */
const testString = "Javascript test!";
console.log(testString);
const fruits = ["😀", "✨", "💀"];

fruits.map((fruit) => {
  console.log(fruit);
});

/**
 * Accordion
 */
const faqManagement = () => {
  const acc = document.getElementsByClassName("accordion-button");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      let closepanel = document.querySelectorAll(".panel");
      panel.setAttribute(
        "aria-expanded",
        panel.getAttribute("aria-expanded") === "true" ? "false" : "true"
      );
      if (panel.getAttribute("aria-expanded") === "true") {
        closepanel.forEach((p) => {
          p.setAttribute("aria-expanded", "false");
        });
        panel.setAttribute("aria-expanded", "true");
      } else {
        panel.setAttribute("aria-expanded", "false");
      }
    });
  }
};
faqManagement();
