// Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".js-nav").classList.add("mobile-nav");

  document.querySelector(".nav-list").classList.remove("close-nav");
});

document.querySelector(".close-button").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.add("close-nav");
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    header.classList.add("header-background");
  } else {
    header.classList.remove("header-background");
  }
});
