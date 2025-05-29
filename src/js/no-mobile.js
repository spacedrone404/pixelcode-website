import "../styles/index.scss";
import "../styles/menu/top.scss";

// No mobile mutants here

document.addEventListener("DOMContentLoaded", function () {
  const currentWindowWidth = window.innerWidth;

  if (currentWindowWidth > 1680) {
    window.location.href = "./index.html";
  }
});
