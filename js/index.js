
//animated text 

var typewriter = new Typewriter("#hi", {
  delay: 75,
});

typewriter
  .pauseFor(250)
  .typeString('HELLO')
  .pauseFor(2500)
  .deleteChars(5)
  .typeString("<strong>I'M</strong> SUSHANTHA ")
  .pauseFor(1000)
  .start();


var typewriter1 = new Typewriter("#whatido",{
  delay: 50,
  loop: true
})

typewriter1
.pauseFor(4500)
.typeString("Competetive programmer")
.pauseFor(250)
.deleteAll()
.typeString("Electronics enthuzist")
.pauseFor(250)
.deleteAll()
.typeString("Violin player")
.pauseFor(250)
.deleteAll()
.typeString("Developer")
.pauseFor(250)
.start();
  


// particle setings 
particlesJS("bg", {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 800 } },
      color: { value: "#000000" },
      shape: {
        type: "triangle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ebe460",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
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
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "bubble" },
        resize: true
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        bubble: { distance: 100, size: 10, duration: 1, opacity: 8, speed: 3 },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  