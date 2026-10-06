document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LANGUAGE SELECTOR
  ========================= */

  const languageSwitch = document.querySelector(".language-switch");

  const pageMap = {
    "index.html": {
      de: "index.html",
      fr: "fr-index.html",
      en: "en-index.html"
    },
    "services.html": {
      de: "services.html",
      fr: "fr-services.html",
      en: "en-services.html"
    },
    "process.html": {
      de: "process.html",
      fr: "fr-process.html",
      en: "en-process.html"
    },
    "request.html": {
      de: "request.html",
      fr: "fr-request.html",
      en: "en-request.html"
    },
    "provider.html": {
      de: "provider.html",
      fr: "fr-provider.html",
      en: "en-provider.html"
    },
    "about.html": {
      de: "about.html",
      fr: "fr-about.html",
      en: "en-about.html"
    },
    "contact.html": {
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

  function getLanguage(page) {
    if (page.startsWith("fr-")) return "fr";
    if (page.startsWith("en-")) return "en";
    return "de";
  }

  if (languageSwitch) {

    const currentPage = getCurrentPage();
    const currentLanguage = getLanguage(currentPage);

    const pageTranslations = pageMap[currentPage] || pageMap["index.html"];

    languageSwitch.innerHTML = `
      <a href="${pageTranslations.de}" class="${currentLanguage === "de" ? "active" : ""}">DE</a>
      <span class="sep">|</span>
      <a href="${pageTranslations.fr}" class="${currentLanguage === "fr" ? "active" : ""}">FR</a>
      <span class="sep">|</span>
      <a href="${pageTranslations.en}" class="${currentLanguage === "en" ? "active" : ""}">EN</a>
    `;
  }


  /* =========================
     FOOTER YEAR
  ========================= */

  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });


  /* =========================
     MOBILE MENU
  ========================= */

  const nav = document.querySelector("header .nav");
  const navlinks = document.querySelector(".navlinks");

  if (nav && navlinks && !nav.querySelector(".menu-toggle")) {

    const menuButton = document.createElement("button");

    menuButton.className = "menu-toggle";
    menuButton.type = "button";
    menuButton.setAttribute("aria-label", "Menu");
    menuButton.innerHTML = "☰";

    nav.insertBefore(menuButton, navlinks);

    menuButton.addEventListener("click", () => {
      navlinks.classList.toggle("open");
    });

    navlinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navlinks.classList.remove("open");
      });
    });
  }

});
