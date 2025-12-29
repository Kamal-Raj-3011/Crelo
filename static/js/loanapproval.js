document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("probaChart");
  if (!canvas) return;

  const probs = JSON.parse(canvas.dataset.probs);
  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Rejected", "Approved"],
      datasets: [{
        label: "Probability (%)",
        data: [probs.Rejected, probs.Approved],

        // 🔥 Visible on dark gradient
        backgroundColor: [
          "rgba(255, 99, 132, 0.85)",   // soft red
          "rgba(72, 239, 196, 0.85)"    // mint green
        ],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#ffffff" // legend text
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: "#ffffff" // numbers
          },
          grid: {
            color: "rgba(255,255,255,0.15)"
          }
        },
        x: {
          ticks: {
            color: "#ffffff"
          },
          grid: {
            display: false
          }
        }
      }
    }
  });
});

  

// gsap.registerPlugin(ScrollTrigger);

// // MAIN SECTION TIMELINE
// const loanSectionTL = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".section1",
//     start: "top 75%",
//     toggleActions: "play none none none"
//   },
//   defaults: {
//     ease: "power2.out",
//     duration: 0.8
//   }
// });

// // SECTION FADE IN
// loanSectionTL.from(".section1", {
//   opacity: 0
// });

// // LEFT CARD
// loanSectionTL.from(
//   ".section1 .col-lg-4 .card",
//   {
//     opacity: 0,
//     x: -50
//   },
//   "-=0.4"
// );

// // LEFT CARD CONTENT
// loanSectionTL.from(
//   ".section1 .col-lg-4 h3, .section1 .col-lg-4 p, .section1 .col-lg-4 .mb-3",
//   {
//     opacity: 0,
//     y: 20,
//     stagger: 0.12
//   },
//   "-=0.4"
// );

// // RIGHT CARD
// loanSectionTL.from(
//   ".section1 .col-lg-8 .card",
//   {
//     opacity: 0,
//     x: 50
//   },
//   "-=0.6"
// );

// // RIGHT IMAGE (INITIAL STATE)
// loanSectionTL.from(
//   "#rightImage img",
//   {
//     opacity: 0,
//     scale: 0.9
//   },
//   "-=0.4"
// );

// loanSectionTL.from(
//   "#rightImage p",
//   {
//     opacity: 0,
//     y: 15
//   },
//   "-=0.3"
// );

// // SUBMIT BUTTON (WHEN IT APPEARS LATER)
// gsap.from("#submitBtn", {
//   scrollTrigger: {
//     trigger: "#submitBtn",
//     start: "top 85%"
//   },
//   opacity: 0,
//   scale: 0.95,
//   duration: 0.6,
//   ease: "power2.out"
// });

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
