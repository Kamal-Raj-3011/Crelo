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
