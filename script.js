const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

// Close mobile menu after clicking a link
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileNav.classList.remove("show"));
});
