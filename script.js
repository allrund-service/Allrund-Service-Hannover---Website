document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     LANGUAGE SELECTOR
  ========================= */

  const headerNav = document.querySelector("header .nav");

  const pageMap = {
    "index.html": {
      de: "index.html",
      fr: "fr-index.html",
      en: "en-index.html"
    },
    "fr-index.html": {
      de: "index.html",
      fr: "fr-index.html",
      en: "en-index.html"
    },
    "en-index.html": {
      de: "index.html",
      fr: "fr-index.html",
      en: "en-index.html"
    },

    "services.html": {
      de: "services.html",
      fr: "fr-services.html",
      en: "en-services.html"
    },
    "fr-services.html": {
      de: "services.html",
      fr: "fr-services.html",
      en: "en-services.html"
    },
    "en-services.html": {
      de: "services.html",
      fr: "fr-services.html",
      en: "en-services.html"
    },

    "process.html": {
      de: "process.html",
      fr: "fr-process.html",
      en: "en-process.html"
    },
    "fr-process.html": {
      de: "process.html",
      fr: "fr-process.html",
      en: "en-process.html"
    },
    "en-process.html": {
      de: "process.html",
      fr: "fr-process.html",
      en: "en-process.html"
    },

    "request.html": {
      de: "request.html",
      fr: "fr-request.html",
      en: "en-request.html"
    },
    "fr-request.html": {
      de: "request.html",
      fr: "fr-request.html",
      en: "en-request.html"
    },
    "en-request.html": {
      de: "request.html",
      fr: "fr-request.html",
      en: "en-request.html"
    },

    "provider.html": {
      de: "provider.html",
      fr: "fr-provider.html",
      en: "en-provider.html"
    },
    "fr-provider.html": {
      de: "provider.html",
      fr: "fr-provider.html",
      en: "en-provider.html"
    },
    "en-provider.html": {
      de: "provider.html",
      fr: "fr-provider.html",
      en: "en-provider.html"
    },

    "about.html": {
      de: "about.html",
      fr: "fr-about.html",
      en: "en-about.html"
    },
    "fr-about.html": {
      de: "about.html",
      fr: "fr-about.html",
      en: "en-about.html"
    },
    "en-about.html": {
      de: "about.html",
      fr: "fr-about.html",
      en: "en-about.html"
    },

    "contact.html": {
      de: "contact.html",
      fr: "fr-contact.html",
      en: "en-contact.html"
    },
    "fr-contact.html": {
      de: "contact.html",
      fr: "fr-contact.html",
      en: "en-contact.html"
    },
    "en-contact.html": {
      de: "contact.html",
      fr: "fr-contact.html",
      en: "en-contact.html"
    }
  };

  function getCurrentPage() {
    let page = window.location.pathname.split("/").pop();

    if (!page || page === "") {
      page = "index.html";
    }

    return page;
  }

  function getCurrentLanguage(page) {
    if (page.startsWith("fr-")) return "fr";
    if (page.startsWith("en-")) return "en";
    return "de";
  }

  if (headerNav) {

    /* Remove duplicate language selectors */
    document.querySelectorAll(".language-switch").forEach(function (el) {
      el.remove();
    });

    const currentPage = getCurrentPage();
    const currentLanguage = getCurrentLanguage(currentPage);

    const translations = pageMap[currentPage] || pageMap["index.html"];

    const languageSwitch = document.createElement("div");

    languageSwitch.className = "language-switch";
    languageSwitch.setAttribute("aria-label", "Language selection");

    languageSwitch.innerHTML = `
      <a href="${translations.de}" class="${currentLanguage === "de" ? "active" : ""}">DE</a>
      <span class="sep">|</span>
      <a href="${translations.fr}" class="${currentLanguage === "fr" ? "active" : ""}">FR</a>
      <span class="sep">|</span>
      <a href="${translations.en}" class="${currentLanguage === "en" ? "active" : ""}">EN</a>
    `;

    headerNav.appendChild(languageSwitch);
  }


  /* =========================
     FOOTER YEAR
  ========================= */

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });


  /* =========================
     MOBILE HAMBURGER MENU
  ========================= */

  if (!headerNav) return;

  /* Avoid creating the menu twice */
  if (headerNav.querySelector(".mobile-menu-toggle")) return;

  const menuToggle = document.createElement("button");

  menuToggle.className = "mobile-menu-toggle";
  menuToggle.type = "button";
  menuToggle.setAttribute("aria-label", "Menü öffnen");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";


  const panel = document.createElement("div");

  panel.className = "mobile-menu-panel";
  panel.setAttribute("aria-hidden", "true");


  /* Current language */
  const currentPage = getCurrentPage();
  const currentLanguage = getCurrentLanguage(currentPage);
  const translations = pageMap[currentPage] || pageMap["index.html"];

  let mobileLinks = "";

  if (currentLanguage === "fr") {

    mobileLinks = `
      <a href="${translations.fr}">Accueil</a>
      <a href="fr-services.html">Services</a>
      <a href="fr-process.html">Comment ça marche</a>
      <a href="fr-request.html">Pour les clients</a>
      <a href="fr-provider.html">Pour les prestataires</a>
      <a href="fr-about.html">À propos</a>
      <a href="fr-contact.html">Contact</a>
      <a class="mobile-menu-cta" href="fr-request.html">Demander un service →</a>
      <a href="datenschutz.html">Protection des données</a>
    `;

  } else if (currentLanguage === "en") {

    mobileLinks = `
      <a href="en-index.html">Home</a>
      <a href="en-services.html">Services</a>
      <a href="en-process.html">How it works</a>
      <a href="en-request.html">For clients</a>
      <a href="en-provider.html">For service providers</a>
      <a href="en-about.html">About us</a>
      <a href="en-contact.html">Contact</a>
      <a class="mobile-menu-cta" href="en-request.html">Request a service →</a>
      <a href="datenschutz.html">Data protection</a>
    `;

  } else {

    mobileLinks = `
      <a href="index.html">Startseite</a>
      <a href="services.html">Dienstleistungen</a>
      <a href="process.html">So funktioniert es</a>
      <a href="request.html">Für Kunden</a>
      <a href="provider.html">Für Dienstleister</a>
      <a href="about.html">Über uns</a>
      <a href="contact.html">Kontakt</a>
      <a class="mobile-menu-cta" href="request.html">Dienstleistung anfragen →</a>
      <a href="datenschutz.html">Datenschutz</a>
    `;
  }


  panel.innerHTML = `
    <div class="mobile-menu-top">
      <img class="mobile-menu-logo" src="assets/logo.png" alt="AllRund-Service">
      <button class="mobile-menu-close" type="button" aria-label="Menü schließen">×</button>
    </div>

    <nav class="mobile-menu-links" aria-label="Mobile Navigation">
      ${mobileLinks}
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


  panel.querySelector(".mobile-menu-close").addEventListener(
    "click",
    closeMenu
  );


  panel.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", closeMenu);

  });


  window.addEventListener("resize", function () {

    if (window.innerWidth > 650) {
      closeMenu();
    }

  });

});
