const navtoggler = document.getElementById("navtoggler");
const mainnavlist = document.getElementById("mainnavlist");
const cardPragraphs = [
  ...document.querySelectorAll(".about-app .text .card p"),
];
navtoggler.addEventListener("click", () => {
  console.log(55);
  mainnavlist.classList.toggle("none-display");
});

