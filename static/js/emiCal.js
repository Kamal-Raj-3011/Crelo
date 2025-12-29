  window.addEventListener("load", () => {

    // MASTER TIMELINE
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 }
    });

    // SECTION FADE-IN
    tl.from(".emiCalPage", {
      opacity: 0,
      y: 40
    });

    // LEFT PANEL
    tl.from(
      ".col-lg-6:first-child .bg-white",
      {
        opacity: 0,
        x: -50
      },
      "-=0.4"
    );

    // INPUT FIELDS STAGGER
    tl.from(
      "#principal, #rate, #tenure, #tenureType",
      {
        opacity: 0,
        y: 20,
        stagger: 0.12
      },
      "-=0.4"
    );

    // RESULT CARD
    tl.from(
      "#result",
      {
        opacity: 0,
        scale: 0.95
      },
      "-=0.3"
    );

    // RIGHT PANEL (CHART)
    tl.from(
      ".col-lg-6:last-child .bg-white",
      {
        opacity: 0,
        x: 50
      },
      "-=0.6"
    );

    // CHART ZOOM-IN
    tl.from(
      "#loanChart",
      {
        scale: 0.7,
        opacity: 0
      },
      "-=0.3"
    );

    // TABLE SECTION
    tl.from(
      ".container.mt-5",
      {
        opacity: 0,
        y: 60
      },
      "-=0.4"
    );

  });


function formatNumber(num) {
    return num.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatAndCalculate() {
    let principalInput = document.getElementById("principal");
    let rawValue = principalInput.value.replace(/,/g, "");
    if (!isNaN(rawValue) && rawValue !== "") {
        principalInput.value = parseInt(rawValue).toLocaleString("en-IN");
    }
    calculateEMI();
}

function calculateEMI() {
    let P = parseFloat(document.getElementById("principal").value.replace(/,/g, ""));
    let R = parseFloat(document.getElementById("rate").value) / (12 * 100);
    let tenureValue = parseFloat(document.getElementById("tenure").value);
    let tenureType = document.getElementById("tenureType").value;
    let N = tenureType === "years" ? tenureValue * 12 : tenureValue;
    
    if (P && R && N) {
        let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        let totalPayment = EMI * N;
        let interestAmount = totalPayment - P;
        
        document.getElementById("emi").innerText = formatNumber(EMI);
        document.getElementById("principalAmount").innerText = formatNumber(P);
        document.getElementById("interestAmount").innerText = formatNumber(interestAmount);
        document.getElementById("totalPayable").innerText = formatNumber(totalPayment);
        generateAmortizationSchedule(P, EMI, R, N);
        updateChart(P, interestAmount);
    }
}

function generateAmortizationSchedule(P, EMI, R, N) {
    let balance = P;
    let tableBody = document.getElementById("amortizationSchedule");
    tableBody.innerHTML = "";
    for (let i = 1; i <= N / 12; i++) {
        let interestPaid = balance * R * 12;
        let principalPaid = (EMI * 12) - interestPaid;
        balance -= principalPaid;
        let row = `<tr>
            <td>${i}</td>
            <td>${formatNumber(balance + principalPaid)}</td>
            <td>${formatNumber(EMI * 12)}</td>
            <td>${formatNumber(interestPaid)}</td>
            <td>${formatNumber(principalPaid)}</td>
            <td>${formatNumber(balance)}</td>
        </tr>`;
        tableBody.innerHTML += row;
    }
}

let loanChart;
function updateChart(principal, interest) {
    let canvas = document.getElementById("loanChart");
    let ctx = canvas.getContext("2d");

    if (loanChart) {
        loanChart.destroy();
    }

    // If inputs are invalid, show a default image
    if (isNaN(principal) || isNaN(interest) || principal <= 0 || interest < 0) {
        let img = new Image();
        img.src = "static/img/pieChart.jpg"; // Replace with your image path
        img.onload = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        return;
    }

    // Draw the pie chart if values are provided
    loanChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Principal", "Interest"],
            datasets: [{
                data: [principal, interest],
                backgroundColor: ["#279dc8", "#FF5733"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: "bottom" }
            }
        }
    });
}

// Run the default image on page load
window.onload = function() {
    updateChart(NaN, NaN); // Show default image initially
    formatAndCalculate();
};