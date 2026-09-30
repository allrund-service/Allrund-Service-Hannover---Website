document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  const toggle = document.querySelector(".mobile-menu-toggle");
  const panel = document.getElementById("mobile-menu");
  if (!toggle || !panel) return;

  const closeButton = panel.querySelector(".mobile-menu-close");
  const links = panel.querySelectorAll("a");

  function closeMenu() {
    panel.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menü öffnen");
    toggle.textContent = "☰";
    panel.setAttribute("aria-hidden", "true");
  }

  function openMenu() {
    panel.classList.add("open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Menü schließen");
    toggle.textContent = "×";
    panel.setAttribute("aria-hidden", "false");
  }

  toggle.addEventListener("click", function () {
    panel.classList.contains("open") ? closeMenu() : openMenu();
  });

  if (closeButton) closeButton.addEventListener("click", closeMenu);
  links.forEach(function (link) { link.addEventListener("click", closeMenu); });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 650) closeMenu();
  });
});
