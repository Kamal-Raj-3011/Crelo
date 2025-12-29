  gsap.to("#rupeeCoin", {
    rotation: 360,          // rotate 360 degrees
    transformOrigin: "50% 50%", // center of SVG
    repeat: -1,             // infinite loop
    duration: 5,            // 5 seconds per rotation
    ease: "linear"          // constant speed
  });


  gsap.to("#rupeeFloat", {
    y: -20,                 // moves up
    rotation: 3,            // slight tilt
    duration: 2.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.to("#rupeeFloat", {
    x: 10,                  // subtle side drift
    duration: 4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });


  const cards = document.querySelectorAll('.section3 .rounded-4');

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = (rect.width / 2 - (e.clientX - rect.left)) / 15;
      const y = (rect.height / 2 - (e.clientY - rect.top)) / 15;

      gsap.to(card, {
        rotationY: x,
        rotationX: y,
        transformPerspective: 1200,
        duration: 0.4,
        ease: "power3.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "power3.out"
      });
    });
  });


  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".feature-card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.6,
      delay: index * 0.05,
      ease: "power3.out"
    });
  });

// MAIN TIMELINE
const howItWorksTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-fluid.py-5",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  defaults: {
    ease: "power2.out",
    duration: 0.7
  }
});

// HEADING ANIMATION
howItWorksTL.from(
  ".container-fluid.py-5 h2",
  {
    opacity: 0,
    y: 30
  }
);

howItWorksTL.from(
  ".container-fluid.py-5 p.text-muted",
  {
    opacity: 0,
    y: 20
  },
  "-=0.4"
);

// STEPS STAGGER
howItWorksTL.from(
  ".container-fluid.py-5 .d-flex.flex-column",
  {
    opacity: 0,
    y: 25,
    stagger: 0.18
  },
  "-=0.2"
);

// STEP NUMBERS (SUBTLE EMPHASIS)
howItWorksTL.from(
  ".container-fluid.py-5 .fs-4",
  {
    scale: 0.8,
    opacity: 0,
    stagger: 0.18
  },
  "-=0.6"
);





// KEY DISABLE CODES
document.addEventListener('contextmenu',
function(event){
    event.preventDefault();
})

document.addEventListener("keydown", function (e) {

    const key = e.key.toLowerCase();

    // F12
    if (key === "f12") {
        e.preventDefault();
        return false;
    }

    // Ctrl + U (View Source)
    if (e.ctrlKey && key === "u") {
        e.preventDefault();
        return false;
    }

    // Ctrl + I
    if (e.ctrlKey && key === "i") {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + I (DevTools)
    if (e.ctrlKey && e.shiftKey && key === "i") {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + J (Console)
    if (e.ctrlKey && e.shiftKey && key === "j") {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + C (Inspect)
    if (e.ctrlKey && e.shiftKey && key === "c") {
        e.preventDefault();
        return false;
    }

});
