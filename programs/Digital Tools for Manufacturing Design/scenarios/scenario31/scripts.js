// Countdown Timer with Circular Progress
const countdownDuration = 5 * 60; // 5 minutes in seconds
let remainingTime = countdownDuration;
const timerElement = document.getElementById('countdown-timer');
const progressCircle = document.querySelector('.progress');
const totalDash = 251; // Circumference for r=40 (2 * π * 40 ≈ 251)

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
    window.location.href = "../index.html"; // Redirect to index or desired action
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
progressCircle.style.strokeDasharray = totalDash;
progressCircle.style.strokeDashoffset = totalDash;
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
      data: [480, 0], // Initial data
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
  invest: `
  Accounting Entries for Invest in Advanced Tools

  Entry 1: Advanced CAD/CAM Software Acquisition
  Debit: 17 Intangible Assets - Software INR 12,00,000
  Credit: 12 Cash/Bank INR 12,00,000

  Entry 2: Simulation Tools Acquisition
  Debit: 17 Intangible Assets - Software INR 8,00,000
  Credit: 12 Cash/Bank INR 8,00,000

  Entry 3: Hardware Upgrades
  Debit: 16 Property, Plant & Equipment INR 5,00,000
  Credit: 12 Cash/Bank INR 5,00,000

  Entry 4: Installation and Integration
  Debit: 70 Administrative Expenses INR 4,00,000
  Credit: 12 Cash/Bank INR 4,00,000

  Entry 5: Staff Training Programs
  Debit: 70 Administrative Expenses INR 3,00,000
  Credit: 12 Cash/Bank INR 3,00,000

  Entry 6: Consulting Services
  Debit: 70 Administrative Expenses INR 6,00,000
  Credit: 12 Cash/Bank INR 6,00,000

  Entry 7: Maintenance and Support
  Debit: 70 Administrative Expenses INR 2,00,000
  Credit: 12 Cash/Bank INR 2,00,000

  Output Gained Entries:
  Entry 8: Accelerated Design Cycles
  Debit: 13 Accounts Receivable INR 15,00,000
  Credit: 40 Sales Revenue INR 15,00,000

  Entry 9: Improved Design Accuracy
  Debit: 12 Cash/Bank INR 10,00,000
  Credit: 50 Cost of Goods Sold (COGS) INR 10,00,000

  Entry 10: Reduced Prototyping Costs
  Debit: 12 Cash/Bank INR 8,00,000
  Credit: 50 Cost of Goods Sold (COGS) INR 8,00,000

  Entry 11: Enhanced Innovation Capability
  Debit: 13 Accounts Receivable INR 7,00,000
  Credit: 40 Sales Revenue INR 7,00,000

  Entry 12: Increased Productivity
  Debit: 13 Accounts Receivable INR 5,00,000
  Credit: 40 Sales Revenue INR 5,00,000

  Entry 13: Cash Received from customers against sales
  Debit: 12 Cash/Bank INR 27,00,000
  Credit: 13 Accounts Receivable INR 27,00,000 (15+7+5)

  Closing Entries
  Entry 14: Close Sales Revenue to Retained Earnings
  Debit: 40 Sales Revenue INR 27,00,000 (15 + 7 + 5)
  Credit: 27 Retained Earnings INR 27,00,000

  Entry 15: Close Cost of Goods Sold (COGS) to Retained Earnings
  Debit: 50 Cost of Goods Sold (COGS) INR 18,00,000 (10 + 8)
  Credit: 70 Administrative Expenses INR 15,00,000 (4 + 3 + 6 + 2)
  Credit: 27 Retained Earnings INR 3,00,000
  `,
  optimize: `
  Accounting Entries for Optimize Existing Tools and Focus on Training

  Entry 1: Enhanced Training Programs
  Debit: 70 Administrative Expenses INR 6,00,000
  Credit: 12 Cash/Bank INR 6,00,000

  Entry 2: Software Upgrades and Updates
  Debit: 17 Intangible Assets - Software INR 4,00,000
  Credit: 12 Cash/Bank INR 4,00,000

  Entry 3: Process Optimization Consulting
  Debit: 70 Administrative Expenses INR 5,00,000
  Credit: 12 Cash/Bank INR 5,00,000

  Entry 4: Internal Workshops and Seminars
  Debit: 70 Administrative Expenses INR 3,00,000
  Credit: 12 Cash/Bank INR 3,00,000

  Entry 5: Minor Hardware Upgrades
  Debit: 16 Property, Plant & Equipment INR 2,00,000
  Credit: 12 Cash/Bank INR 2,00,000

  Entry 6: Employee Incentive Programs
  Debit: 70 Administrative Expenses INR 2,00,000
  Credit: 12 Cash/Bank INR 2,00,000

  Entry 7: Increased Tool Proficiency
  Debit: 13 Accounts Receivable INR 10,00,000
  Credit: 40 Sales Revenue INR 10,00,000

  Entry 8: Improved Workflow Efficiency
  Debit: 12 Cash/Bank INR 8,00,000
  Credit: 50 Cost of Goods Sold (COGS) INR 8,00,000

  Entry 9: Enhanced Product Quality
  Debit: 12 Cash/Bank INR 7,00,000
  Credit: 50 Cost of Goods Sold (COGS) INR 7,00,000

  Entry 10: Cost Savings on New Investments
  Debit: 12 Cash/Bank INR 5,00,000
  Credit: 50 Cost of Goods Sold (COGS) INR 5,00,000

  Entry 11: Higher Employee Satisfaction
  Debit: 13 Accounts Receivable INR 4,00,000
  Credit: 40 Sales Revenue INR 4,00,000

  Entry 12: Cash Received from customers against sales
  Debit: 12 Cash/Bank INR 14,00,000
  Credit: 13 Accounts Receivable INR 14,00,000 (10+4)

  Entry 13: Close Sales Revenue to Retained Earnings
  Debit: 40 Sales Revenue INR 14,00,000 (10 + 4)
  Credit: 27 Retained Earnings INR 14,00,000

  Entry 14: Close Cost of Goods Sold (COGS) to Retained Earnings
  Debit: 50 Cost of Goods Sold (COGS) INR 20,00,000
  Credit: 27 Retained Earnings INR 20,00,000 (8 + 7 + 5)

  Entry 15: Close Administrative Expenses to Retained Earnings
  Debit: 27 Retained Earnings INR 16,00,000 (6 + 5 + 3 + 2)
  Credit: 70 Administrative Expenses INR 16,00,000
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
  if (option === 'invest') {
    modalTitle.textContent = '  Accounting Entries for Invest in Advanced Tools';
    modalEntries.textContent = accountingEntries.invest;
  } else if (option === 'optimize') {
    modalTitle.textContent = '  Accounting Entries for Optimize Existing Tools and Focus on Training';
    modalEntries.textContent = accountingEntries.optimize;
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
  if (option === 'invest') {
    // Update chart data and financial tables for Invest in Advanced Tools
    revenueChart.data.datasets[0].data[1] = 530; // Example value after implementation
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = '50%';
    console.log('Financials updated for option: Invest in Advanced Tools');
  } else if (option === 'optimize') {
    // Update chart data and financial tables for Optimize Existing Tools
    revenueChart.data.datasets[0].data[1] = 500; // Example value after implementation
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = '50%';
    console.log('Financials updated for option: Optimize Existing Tools');
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
