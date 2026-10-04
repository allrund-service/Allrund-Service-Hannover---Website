document.addEventListener("DOMContentLoaded", function () {

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Remove all existing language selectors
  document.querySelectorAll(".language-switch").forEach(function (el) {
    el.remove();
  });

  // Create ONE language selector
  const languageSwitch = document.createElement("div");
  languageSwitch.className = "language-switch";
  languageSwitch.setAttribute("aria-label", "Language selection");

  languageSwitch.innerHTML = `
    <a href="index.html">DE</a>
    <span class="sep">|</span>
    <a href="fr-index.html">FR</a>
    <span class="sep">|</span>
    <a href="en-index.html">EN</a>
  `;

  const headerNav = document.querySelector("header .nav");

  if (headerNav) {
    headerNav.appendChild(languageSwitch);
  }

  // Mobile hamburger menu
  if (!headerNav) return;

  const menuToggle = document.createElement("button");
  menuToggle.className = "mobile-menu-toggle";
  menuToggle.type = "button";
  menuToggle.setAttribute("aria-label", "Menü öffnen");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";

  const panel = document.createElement("div");
  panel.className = "mobile-menu-panel";
  panel.setAttribute("aria-hidden", "true");

  panel.innerHTML = `
    <div class="mobile-menu-top">
      <img class="mobile-menu-logo" src="assets/logo.png" alt="AllRund-Service">
      <button class="mobile-menu-close" type="button" aria-label="Menü schließen">×</button>
    </div>

    <nav class="mobile-menu-links" aria-label="Mobile Navigation">
      <a href="index.html">Startseite</a>
      <a href="services.html">Dienstleistungen</a>
      <a href="process.html">So funktioniert es</a>
      <a href="request.html">Für Kunden</a>
      <a href="provider.html">Für Dienstleister</a>
      <a href="about.html">Über uns</a>
      <a href="contact.html">Kontakt</a>
      <a class="mobile-menu-cta" href="request.html">Dienstleistung anfragen →</a>
      <a href="datenschutz.html">Datenschutz</a>
    </nav>
  `;

  headerNav.appendChild(menuToggle);
  document.body.appendChild(panel);

  function closeMenu() {
    panel.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menü öffnen");
    menuToggle.textContent = "☰";
    panel.setAttribute("aria-hidden", "true");
  }

  function openMenu() {
    panel.classList.add("open");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Menü schließen");
    menuToggle.textContent = "×";
    panel.setAttribute("aria-hidden", "false");
  }

  menuToggle.addEventListener("click", function () {
    if (panel.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  panel.querySelector(".mobile-menu-close").addEventListener("click", closeMenu);

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 650) {
      closeMenu();
    }
  });

});
