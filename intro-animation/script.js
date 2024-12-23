const scrolls = document.querySelectorAll(
  ".scroll-left, .scroll-bottom, .scroll-right, .scroll-center"
);

scrolls.forEach((scroll) => {
  ScrollTrigger.create({
    trigger: scroll,
    endTrigger: "body",
    start: "top 80%",
    toggleClass: "ativo",
  });
});

// OS SCRIPTS ABAIXOS DEVEM SER CHAMADOS NO HTML.

// <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

// <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
