// page1.js

// Countdown Timer with Circular Progress
const countdownDuration = 5 * 60; // 5 minutes in seconds
let remainingTime = countdownDuration;
const timerElement = document.getElementById('countdown-timer');
const progressCircle = document.querySelector('.progress');
const totalDash = 2 * Math.PI * 36; // Circumference for r=36 ≈ 226

function updateTimer() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Update circular progress
  const progressOffset = totalDash - (remainingTime / countdownDuration) * totalDash;
  progressCircle.style.strokeDashoffset = progressOffset;

  // Change color based on time remaining
  if (remainingTime <= 60) {
    progressCircle.style.stroke = '#ff4e4e'; // Red
  } else if (remainingTime <= 3 * 60) {
    progressCircle.style.stroke = '#f1c40f'; // Yellow
  } else {
    progressCircle.style.stroke = '#4E67EB'; // Blue
  }

  if (remainingTime > 0) {
    remainingTime--;
  } else {
    clearInterval(timerInterval);
    clearInterval(progressInterval);
    alert('Time is up! The simulation will now end.');
    window.location.href = "../../index.html"; // Redirect to index or desired action
  }
}
// Get the chatbot icon and popup elements
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotPopup = document.getElementById('chatbot-popup');

// Add event listener to the chatbot icon
chatbotIcon.addEventListener('click', () => {
  // Toggle the chatbot popup visibility
  chatbotPopup.style.display = chatbotPopup.style.display === 'block' ? 'none' : 'block';
});
// Initialize the timer
progressCircle.style.strokeDasharray = `${totalDash}`;
progressCircle.style.strokeDashoffset = `${totalDash}`;
updateTimer(); // Initial call
const timerInterval = setInterval(updateTimer, 1000);

// Progress Bar Update synchronized with the countdown timer
const progressBarInner = document.getElementById('progress-bar-inner');
function updateProgressBar() {
  const elapsedTime = countdownDuration - remainingTime;
  const progressPercentage = (elapsedTime / countdownDuration) * 100;
  progressBarInner.style.width = `${progressPercentage}%`;
}

// Initialize the progress bar
updateProgressBar(); // Initial call
const progressInterval = setInterval(updateProgressBar, 1000);

// Expandable Rows in Tables
const expandableRows = document.querySelectorAll('.expandable');
expandableRows.forEach(row => {
  row.addEventListener('click', () => {
    const icon = row.querySelector('i');
    const nextRows = [];
    let sibling = row.nextElementSibling;
    while (sibling && sibling.classList.contains('hidden-row')) {
      nextRows.push(sibling);
      sibling = sibling.nextElementSibling;
    }
    nextRows.forEach(r => {
      r.style.display = r.style.display === 'table-row' ? 'none' : 'table-row';
    });
    // Toggle icon
    if (icon.classList.contains('fa-plus')) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    } else {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  });
});

// Interactive Chart using Chart.js
const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Before Scenario', 'After Scenario'],
    datasets: [{
      label: 'Revenue (INR Lakhs)',
      data: [500, 0], // Initial data
      backgroundColor: ['#4E67EB', '#f1c40f']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 20,
          padding: 15
        }
      },
      title: {
        display: true,
        text: 'Values Before the Scenario'
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Accounting entries data
const accountingEntries = {
  dfm: `
Accounting Entries for Prioritize Aesthetic Design with Enhanced DFM Adjustments

Entry 1: Advanced CAD/CAM Software Acquisition
Debit: 17 Intangible Assets - Software INR 10,00,000
Credit: 12 Cash/Bank INR 10,00,000
Entry 2: Simulation and Modeling Tools Acquisition
Debit: 17 Intangible Assets - Software INR 8,00,000
Credit: 12 Cash/Bank INR 8,00,000
Entry 3: Design Optimization Workshops
Debit: 70 Administrative Expenses INR 4,00,000
Credit: 12 Cash/Bank INR 4,00,000
Entry 4: Prototyping Equipment Acquisition
Debit: 16 Property, Plant & Equipment INR 6,00,000
Credit: 12 Cash/Bank INR 6,00,000
Entry 5: Consulting Services
Debit: 70 Administrative Expenses INR 5,00,000
Credit: 12 Cash/Bank INR 5,00,000
Entry 6: Workforce Training Programs
Debit: 70 Administrative Expenses INR 3,00,000
Credit: 12 Cash/Bank INR 3,00,000
Entry 7: Maintenance and Support Contracts
Debit: 70 Administrative Expenses INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000
Entry 8: Enhanced Product Aesthetics
Debit: 13 Accounts Receivable INR 15,00,000
Credit: 40 Sales Revenue INR 15,00,000
Entry 9: Optimized Manufacturability
Debit: 12 Cash/Bank INR 12,00,000
Credit: 50 Cost of Goods Sold (COGS) INR 12,00,000
Entry 10: Reduced Design Iterations
Debit: 13 Accounts Receivable INR 10,00,000
Credit: 40 Sales Revenue INR 10,00,000
Entry 11: Improved Product Quality
Debit: 12 Cash/Bank INR 8,00,000
Credit: 50 Cost of Goods Sold (COGS) INR 8,00,000
Entry 12: Increased Market Competitiveness
Debit: 13 Accounts Receivable INR 7,00,000
Credit: 40 Sales Revenue INR 7,00,000
Entry 13: Cash Received from customers against sales
Debit: 12 Cash/Bank INR 32,00,000
Credit: 13 Accounts Receivable INR 32,00,000 (15+10+7)
Closing Entry
Entry 14: Sales Revenue to Retained Earnings
Debit: 40 Sales Revenue INR 32,00,000 (15 + 10 + 7)
Credit: 27 Retained Earnings INR 32,00,000
Entry 15: Close Cost of Goods Sold (COGS) to Retained Earnings
Debit: 50 Cost of Goods Sold (COGS) INR 20,00,000 (12 + 8)
Credit: 27 Retained Earnings INR 20,00,000 
Entry 16: Close Administrative Expenses to Retained Earnings
Debit: 27 Retained Earnings INR 14,00,000 (4 + 5 + 3 + 2)
Credit: 70 Administrative Expenses INR 14,00,000
`,
  simplify: `
Accounting Entries for Simplify Designs for Manufacturability While Maintaining Essential Aesthetic Features

Entry 1: Design Simplification Tools Acquisition
Debit: 17 Intangible Assets - Software INR 6,00,000
Credit: 12 Cash/Bank INR 6,00,000
Entry 2: Basic Simulation Software Acquisition
Debit: 17 Intangible Assets - Software INR 5,00,000
Credit: 12 Cash/Bank INR 5,00,000
Entry 3: Staff Training Programs
Debit: 70 Administrative Expenses INR 4,00,000
Credit: 12 Cash/Bank INR 4,00,000
Entry 4: Process Optimization Consulting
Debit: 70 Administrative Expenses INR 5,00,000
Credit: 12 Cash/Bank INR 5,00,000
Entry 5: Minimal Prototyping Equipment Acquisition
Debit: 16 Property, Plant & Equipment INR 3,00,000
Credit: 12 Cash/Bank INR 3,00,000
Entry 6: Internal Workshops and Seminars
Debit: 70 Administrative Expenses INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000
Entry 7: Maintenance and Support Contracts
Debit: 70 Administrative Expenses INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000
Entry 8: Cost-Effective Production
Debit: 12 Cash/Bank INR 12,00,000
Credit: 50 Cost of Goods Sold (COGS) INR 12,00,000
Entry 9: Faster Time-to-Market
Debit: 13 Accounts Receivable INR 10,00,000
Credit: 40 Sales Revenue INR 10,00,000
Entry 10: Maintained Aesthetic Appeal
Debit: 13 Accounts Receivable INR 8,00,000
Credit: 40 Sales Revenue INR 8,00,000
Entry 11: Improved Product Reliability
Debit: 12 Cash/Bank INR 7,00,000
Credit: 50 Cost of Goods Sold (COGS) INR 7,00,000
Entry 12: Higher Employee Efficiency
Debit: 13 Accounts Receivable INR 5,00,000
Credit: 40 Sales Revenue INR 5,00,000
Entry 13: Cash Received from customers against sales
Debit: 12 Cash/Bank INR 23,00,000
Credit: 13 Accounts Receivable INR 23,00,000 (10+8+5)
Closing Entry
Entry 14: Close Sales Revenue to Retained Earnings
Debit: 40 Sales Revenue INR 23,00,000 (10 + 8 + 5)
Credit: 27 Retained Earnings INR 23,00,000
Entry 15: Close Cost of Goods Sold (COGS) to Retained Earnings
Debit: 50 Cost of Goods Sold (COGS) INR 19,00,000
Credit: 27 Retained Earnings INR 19,00,000 (12 + 7)
Entry 16: Close Administrative Expenses to Retained Earnings
Debit: 27 Retained Earnings INR 13,00,000 (4 + 5 + 2 + 2 + 3)
Credit: 70 Administrative Expenses INR 13,00,000
`
};

// Function to show the modal with the appropriate entries
function showModal(option) {
  const modal = document.getElementById('accounting-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalEntries = document.getElementById('modal-entries');
  const closeButton = document.querySelector('.close-button');
  const proceedButton = document.getElementById('proceed-button'); // Select the new Proceed button

  // Set the modal title and entries based on the option
  if (option === 'dfm') {
    modalTitle.textContent = 'Accounting Entries for Prioritize Aesthetic Design with Enhanced DFM Adjustments';
    modalEntries.textContent = accountingEntries.dfm;
  } else if (option === 'simplify') {
    modalTitle.textContent = 'Accounting Entries for Simplify Designs for Manufacturability While Maintaining Essential Aesthetic Features';
    modalEntries.textContent = accountingEntries.simplify;
  }

  // Display the modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  // Add event listener to the Proceed button
proceedButton.onclick = function () {
// window.location.href = 'page2.html';
 const nextPageUrl = 'page2.html'; // Replace with the target page
  const scenarioTitle=document.querySelector('.scenario');
  

  let scenarioDetail={
    option,
    scenario:scenarioTitle.innerText || "Default Scenario"
  }
  console.log("here",scenarioTitle.text);


  proceedWithApiCall(1,option, nextPageUrl,scenarioDetail);
  };

  // Close the modal when the close button is clicked
  closeButton.onclick = function () {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close the modal when the user clicks outside of the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  };

  // Handle Esc key to close the modal
  document.onkeydown = function (event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  };
}


// Function to update financial tables based on option
function updateFinancials(option) {
  if (option === 'dfm') {
    // Update chart data and financial tables for Enhanced DFM Adjustments
    revenueChart.data.datasets[0].data[1] = 550; // Example value after implementation
    revenueChart.update();
    console.log('Financials updated for option: Enhanced DFM Adjustments');
  } else if (option === 'simplify') {
    // Update chart data and financial tables for Simplify Designs for Manufacturability
    revenueChart.data.datasets[0].data[1] = 520; // Example value after implementation
    revenueChart.update();
    console.log('Financials updated for option: Simplify Designs for Manufacturability');
  }
}

// Accessibility: Keyboard Navigation for Buttons
const buttons = document.querySelectorAll('.footer-buttons .end-button, .footer-buttons .next-button');
buttons.forEach(button => {
  button.setAttribute('tabindex', '0');
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});

// Smooth Page Transition (optional)
window.onload = () => {
  document.body.classList.add('loaded');
};

// --- End of new code for modal functionality ---
