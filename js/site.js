(function () {
  var cfg = window.INDIE_ROOTS && window.INDIE_ROOTS.gymkarta;
  if (cfg) {
    document.querySelectorAll("[data-gymkarta-store]").forEach(function (link) {
      var key = link.getAttribute("data-gymkarta-store");
      var url = cfg[key];
      if (url) {
        link.href = url;
        link.removeAttribute("aria-disabled");
      } else {
        link.setAttribute("aria-disabled", "true");
        link.addEventListener("click", function (event) {
          event.preventDefault();
        });
      }
    });
  }

  var toggle = document.querySelector(".hamburger");
  var menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }
})();
