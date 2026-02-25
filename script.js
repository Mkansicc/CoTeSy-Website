const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  mobileNav?.classList.toggle("show");
});

// Close mobile menu after clicking a link
mobileNav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => mobileNav.classList.remove("show"));
});

/* =========================
   Training Tabs
========================= */
document.querySelectorAll("[data-tabs]").forEach((tabsRoot) => {
  const buttons = tabsRoot.querySelectorAll(".tab-btn");
  const panels = tabsRoot.querySelectorAll(".tab-panel");

  const setActive = (tabName) => {
    buttons.forEach((btn) => {
      const active = btn.dataset.tab === tabName;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    panels.forEach((panel) => {
      const show = panel.dataset.panel === tabName;
      panel.classList.toggle("show", show);
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setActive(btn.dataset.tab));
  });

  // Default to active button, otherwise first tab
  const defaultTab =
    tabsRoot.querySelector(".tab-btn.active")?.dataset.tab || buttons[0]?.dataset.tab;

  if (defaultTab) setActive(defaultTab);
});
