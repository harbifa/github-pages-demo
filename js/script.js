// Shared by all three pages. Storage is optional, including for file:// pages.
(function () {
  "use strict";

  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  let savedTheme;
  try {
    savedTheme = localStorage.getItem("pages-demo-theme");
  } catch (error) {
    // The toggle still works if the browser blocks local storage.
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    button.setAttribute("aria-pressed", String(isDark));
    button.textContent = isDark ? "Light mode" : "Dark mode";
  }

  applyTheme(savedTheme === "dark" ? "dark" : "light");
  button.hidden = false;

  button.addEventListener("click", function () {
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
      localStorage.setItem("pages-demo-theme", theme);
    } catch (error) {
      // Saving a preference is optional; changing the theme is not.
    }
  });
})();
