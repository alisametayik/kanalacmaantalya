document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }

  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
    });
  });

  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        if (openItem !== item) openItem.classList.remove("open");
      });
      item.classList.toggle("open", !wasOpen);
    });
  });

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
