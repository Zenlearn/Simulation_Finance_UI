// page1.js

// Countdown Timer with Circular Progress
const countdownDuration = 5 * 60; // 5 minutes in seconds
let remainingTime = countdownDuration;
const timerElement = document.getElementById("countdown-timer");
const progressCircle = document.querySelector(".progress");
const totalDash = 2 * Math.PI * 40; // Circumference for r=40 ≈ 251.327

function updateTimer() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  // Update circular progress
  const progressOffset =
    totalDash - (remainingTime / countdownDuration) * totalDash;
  progressCircle.style.strokeDashoffset = progressOffset;

  // Change color based on time remaining
  if (remainingTime <= 60) {
    progressCircle.style.stroke = "#ff4e4e"; // Red
  } else if (remainingTime <= 3 * 60) {
    progressCircle.style.stroke = "#f1c40f"; // Yellow
  } else {
    progressCircle.style.stroke = "#4E67EB"; // Blue
  }

  if (remainingTime > 0) {
    remainingTime--;
  } else {
    clearInterval(timerInterval);
    clearInterval(progressInterval);
    alert("Time is up! The simulation will now end.");
    window.location.href = "page2.html"; // Redirect to page2.html or desired action
  }
}
// Get the chatbot icon and popup elements
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotPopup = document.getElementById("chatbot-popup");

// Add event listener to the chatbot icon
chatbotIcon.addEventListener("click", () => {
  // Toggle the chatbot popup visibility
  chatbotPopup.style.display =
    chatbotPopup.style.display === "block" ? "none" : "block";
});
// Initialize the timer
progressCircle.style.strokeDasharray = `${totalDash}`;
progressCircle.style.strokeDashoffset = `${totalDash}`;
updateTimer(); // Initial call
const timerInterval = setInterval(updateTimer, 1000);

// Progress Bar Update synchronized with the countdown timer
const progressBarInner = document.getElementById("progress-bar-inner");
function updateProgressBar() {
  const elapsedTime = countdownDuration - remainingTime;
  const progressPercentage = (elapsedTime / countdownDuration) * 100;
  progressBarInner.style.width = `${progressPercentage}%`;
}

// Initialize the progress bar
updateProgressBar(); // Initial call
const progressInterval = setInterval(updateProgressBar, 1000);

// Expandable Rows in Tables
const expandableRows = document.querySelectorAll(".expandable");
expandableRows.forEach((row) => {
  row.addEventListener("click", () => {
    const icon = row.querySelector("i");
    const nextRows = [];
    let sibling = row.nextElementSibling;
    while (sibling && sibling.classList.contains("hidden-row")) {
      nextRows.push(sibling);
      sibling = sibling.nextElementSibling;
    }
    nextRows.forEach((r) => {
      r.style.display = r.style.display === "table-row" ? "none" : "table-row";
    });
    // Toggle icon
    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });
});

// Interactive Chart using Chart.js
const ctx = document.getElementById("revenueChart").getContext("2d");
const revenueChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Before Scenario", "After Scenario"],
    datasets: [
      {
        label: "Revenue (INR Lakhs)",
        data: [400, 0], // Initial data
        backgroundColor: ["#4E67EB", "#f1c40f"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 20,
          padding: 15,
        },
      },
      title: {
        display: true,
        text: "Values Before the Scenario",
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Accounting entries data
const accountingEntries = {
  proceedImplementation: `
Accounting Entries for Proceed with Implementation

**Predictive Maintenance using IoT**

Entry 1: IoT Sensors and Devices
Debit: 16 Property, Plant & Equipment INR 8,00,000
Credit: 12 Cash/Bank INR 8,00,000

Entry 2: Data Analytics Platform
Debit: 17 Intangible Assets - Software INR 10,00,000
Credit: 12 Cash/Bank INR 10,00,000

Entry 3: Integration Services
Debit: 16 Property, Plant & Equipment INR 5,00,000
Credit: 12 Cash/Bank INR 5,00,000

Entry 4: Staff Training Programs
Debit: 70 Administrative Expenses INR 3,00,000
Credit: 12 Cash/Bank INR 3,00,000

Entry 5: Maintenance and Support
Debit: 70 Administrative Expenses INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000

Entry 6: Reduced Downtime
Debit: 50 Cost of Goods Sold (COGS) INR 15,00,000
Credit: 12 Cash/Bank INR 15,00,000

Entry 7: Cost Savings on Repairs
Debit: 50 Cost of Goods Sold (COGS) INR 10,00,000
Credit: 12 Cash/Bank INR 10,00,000

Entry 8: Extended Machinery Lifespan
Debit: 50 Cost of Goods Sold (COGS) INR 5,00,000
Credit: 12 Cash/Bank INR 5,00,000

Entry 9: Improved Production Efficiency
Debit: 50 Cost of Goods Sold (COGS) INR 5,00,000
Credit: 12 Cash/Bank INR 5,00,000

Closing Entry
Entry 10: Close Cost of Goods Sold (COGS) to Retained Earnings
Debit: 27 Retained Earnings INR 40,00,000
Credit: 50 Cost of Goods Sold (COGS) INR 35,00,000
Credit: 70 Administrative Expenses INR 5,00,000
`,
  delayImplementation: `
Accounting Entries for Delay Implementation

**Adopt TPM Practices**

Entry 1: Staff Training Programs
Debit: 70 Administrative Expenses INR 5,00,000
Credit: 12 Cash/Bank INR 5,00,000

Entry 2: Employee Engagement Initiatives
Debit: 70 Administrative Expenses INR 3,00,000
Credit: 12 Cash/Bank INR 3,00,000

Entry 3: Maintenance Tools and Equipment
Debit: 16 Property, Plant & Equipment INR 4,00,000
Credit: 12 Cash/Bank INR 4,00,000

Entry 4: Process Re-engineering
Debit: 70 Administrative Expenses INR 6,00,000
Credit: 12 Cash/Bank INR 6,00,000

Entry 5: TPM Software or Systems
Debit: 17 Intangible Assets - Software INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000

Entry 6: Enhanced Equipment Reliability
Debit: 50 Cost of Goods Sold (COGS) INR 12,00,000
Credit: 12 Cash/Bank INR 12,00,000

Entry 7: Cost Reduction on Maintenance
Debit: 50 Cost of Goods Sold (COGS) INR 8,00,000
Credit: 12 Cash/Bank INR 8,00,000

Entry 8: Improved Employee Morale and Engagement
Debit: 40 Sales Revenue INR 5,00,000
Credit: 12 Cash/Bank INR 5,00,000

Entry 9: Increased Operational Efficiency
Debit: 50 Cost of Goods Sold (COGS) INR 5,00,000
Credit: 12 Cash/Bank INR 5,00,000

Closing Entry
Entry 10: Close Sales Revenue to Retained Earnings
Debit: 40 Sales Revenue INR 5,00,000
Credit: 27 Retained Earnings INR 5,00,000

Entry 11: Close Cost of Goods Sold (COGS) to Retained Earnings
Debit: 27 Retained Earnings INR 39,00,000
Credit: 50 Cost of Goods Sold (COGS) INR 25,00,000
Credit: 70 Administrative Expenses INR 14,00,000
`,
};

// Function to show the modal with the appropriate entries
function showModal(option) {
  const modal = document.getElementById("accounting-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalEntries = document.getElementById("modal-entries");
  const closeButton = document.querySelector(".close-button");
  const proceedButton = document.getElementById("proceed-button"); // Select the new Proceed button

  // Set the modal title and entries based on the option
  if (option === "proceedImplementation") {
    modalTitle.textContent =
      "Accounting Entries for Proceed with Implementation";
    modalEntries.textContent = accountingEntries.proceedImplementation;
  } else if (option === "delayImplementation") {
    modalTitle.textContent =
      "Accounting Entries for Delay Implementation";
    modalEntries.textContent = accountingEntries.delayImplementation;
  }

  // Display the modal
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  // Add event listener to the Proceed button
  proceedButton.onclick = function () {
    // window.location.href = "page2.html"; // Redirect to the next page
  };

  // Close the modal when the close button is clicked
  closeButton.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Close the modal when the user clicks outside of the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  };

  // Handle Esc key to close the modal
  document.onkeydown = function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  };
}

// Function to update financial tables based on option
function updateFinancials(option) {
  if (option === "proceedImplementation") {
    // Update chart data and financial tables for Proceed with Implementation
    revenueChart.data.datasets[0].data[1] = 420; // Example value after implementation
    revenueChart.options.plugins.title.text =
      "Values After Implementing Predictive Maintenance";
    revenueChart.data.datasets[0].backgroundColor = ["#4E67EB", "#2ecc71"]; // Green for positive change
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = "50%";
    console.log("Financials updated for option: Proceed with Implementation");
  } else if (option === "delayImplementation") {
    // Update chart data and financial tables for Delay Implementation
    revenueChart.data.datasets[0].data[1] = 380; // Example value after delaying implementation
    revenueChart.options.plugins.title.text =
      "Values After Delaying Implementation";
    revenueChart.data.datasets[0].backgroundColor = ["#4E67EB", "#e74c3c"]; // Red for negative change
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = "50%";
    console.log("Financials updated for option: Delay Implementation");
  }
}

// Accessibility: Keyboard Navigation for Buttons
const buttons = document.querySelectorAll(
  ".footer-buttons .end-button, .footer-buttons .next-button"
);
buttons.forEach((button) => {
  button.setAttribute("tabindex", "0");
  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      button.click();
    }
  });
});

// Smooth Page Transition (optional)
window.onload = () => {
  document.body.classList.add("loaded");
};
