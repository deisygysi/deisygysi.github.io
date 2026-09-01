(function () {
  var container = document.getElementById("particles-js");

  if (!container || typeof particlesJS !== "function") {
    return;
  }

  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var compactScreen = window.matchMedia && window.matchMedia("(max-width: 700px)").matches;

  particlesJS("particles-js", {
    particles: {
      number: {
        value: compactScreen ? 55 : 100,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#d33682" },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 6 }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: { enable: false, speed: 0.8, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 15,
        random: true,
        anim: { enable: false, speed: 20, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#2aa198",
        opacity: 0.3,
        width: 4
      },
      move: {
        enable: !reducedMotion,
        speed: 2.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !reducedMotion, mode: "repulse" },
        onclick: { enable: !reducedMotion, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}());