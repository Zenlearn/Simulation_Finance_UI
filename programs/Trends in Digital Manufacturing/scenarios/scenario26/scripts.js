// scripts.js
// Get the chatbot icon and popup elements
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotPopup = document.getElementById('chatbot-popup');

// Add event listener to the chatbot icon
chatbotIcon.addEventListener('click', () => {
  // Toggle the chatbot popup visibility
  chatbotPopup.style.display = chatbotPopup.style.display === 'block' ? 'none' : 'block';
});
// Accounting entries data
const accountingEntries = {
  implement: `
Accounting Entries for Implement Digital Twin

Entry 1: Digital Twin Software Licensing
Debit: 17 Intangible Assets - Software INR 10,00,000
Credit: 12 Cash/Bank INR 10,00,000
Entry 2: Hardware Upgrades for Integration
Debit: 16 Property, Plant & Equipment INR 7,00,000
Credit: 12 Cash/Bank INR 7,00,000
Entry 3: Installation and Setup
Debit: 16 Property, Plant & Equipment INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000
Entry 4: Staff Training Programs
Debit: 70 Administrative Expenses INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000
Entry 5: Technical Support and Maintenance
Debit: 70 Administrative Expenses INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000
Entry 6: Enhanced Process Optimization
Debit: 13 Accounts Receivable INR 10,00,000
Credit: 40 Sales Revenue INR 10,00,000
Entry 7: Reduced Lead Times
Debit: 13 Accounts Receivable INR 8,00,000
Credit: 40 Sales Revenue INR 8,00,000
Entry 8: Improved Quality Control
Debit: 50 Cost of Goods Sold (COGS) INR 12,00,000 (Reduction in COGS)
Credit: 12 Cash/Bank INR 12,00,000
Entry 9: Cost Savings on Prototyping
Debit: 50 Cost of Goods Sold (COGS) INR 5,00,000 (Reduction in COGS)
Credit: 12 Cash/Bank INR 5,00,000
Entry 10: Cash received from customer for sales done
Debit: 12 Cash/Bank INR 18,00,000
Credit: 13 Accounts Receivable INR 18,00,000
Closing Entries
Entry 11: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue INR 18,00,000
Credit: 27 Retained Earnings INR 18,00,000
Entry 12: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings INR 13,00,000
Debit: 70 Administrative Expenses INR 4,00,000
Credit: 50 Cost of Goods Sold (COGS) INR 17,00,000
  `,
  delay: `
Accounting Entries for Enhance Quality Control

Entry 1: Automated Inspection Equipment
Debit: 16 Property, Plant & Equipment INR 10,00,000
Credit: 12 Cash/Bank INR 10,00,000
Entry 2: Software Licensing
Debit: 17 Intangible Assets - Software INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000
Entry 3: Installation and Calibration
Debit: 16 Property, Plant & Equipment INR 3,00,000
Credit: 12 Cash/Bank INR 3,00,000
Entry 4: Staff Training Programs
Debit: 70 Administrative Expenses INR 1,00,000
Credit: 12 Cash/Bank INR 1,00,000
Entry 5: Maintenance Contracts
Debit: 70 Administrative Expenses INR 1,00,000
Credit: 12 Cash/Bank INR 1,00,000
Entry 6: Real-Time Defect Detection
Debit: 50 Cost of Goods Sold (COGS) INR 13,00,000 (Reduction in COGS)
Credit: 12 Cash/Bank INR 13,00,000
Entry 7: Consistency in Quality
Debit: 13 Accounts Receivable INR 8,00,000
Credit: 40 Sales Revenue INR 8,00,000
Entry 8: Operational Efficiency
Debit: 70 Administrative Expenses INR 6,00,000 (Reduction in Expenses)
Credit: 12 Cash/Bank INR 6,00,000
Entry 9: Reduced Rework Costs
Debit: 50 Cost of Goods Sold (COGS) INR 3,00,000 (Reduction in COGS)
Credit: 12 Cash/Bank INR 3,00,000
Entry 10: Cash received from customer for sales done
Debit: 12 Cash/Bank INR 8,00,000
Credit: 13 Accounts Receivable INR 8,00,000
Closing Entries
Entry 11: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue INR 8,00,000
Credit: 27 Retained Earnings INR 8,00,000
Entry 12: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings INR 20,00,000
Credit: 50 Cost of Goods Sold (COGS) INR 16,00,000
Credit: 70 Administrative Expenses INR 4,00,000 (6-1-1)
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
  if (option === 'implement') {
    modalTitle.textContent = 'Accounting Entries for Implement Digital Twin';
    modalEntries.textContent = accountingEntries.implement;
  } else if (option === 'delay') {
    modalTitle.textContent = 'Accounting Entries for Enhance Quality Control';
    modalEntries.textContent = accountingEntries.delay;
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
  if (option === 'implement') {
    // Update chart data and financial tables for Implement Digital Twin
    revenueChart.data.datasets[0].data[1] = 460; // Example value after implementation
    revenueChart.options.plugins.title.text = 'After Implementing Digital Twin';
    revenueChart.update();
    // Update progress bar as an example
    const progressBarInner = document.getElementById('progress-bar-inner');
    if (progressBarInner) {
      progressBarInner.style.width = '50%';
    }
    console.log('Financials updated for option: Implement Digital Twin');
  } else if (option === 'delay') {
    // Update chart data and financial tables for Enhance Quality Control
    revenueChart.data.datasets[0].data[1] = 440; // Example value after implementation
    revenueChart.options.plugins.title.text = 'After Enhancing Quality Control';
    revenueChart.update();
    // Update progress bar as an example
    const progressBarInner = document.getElementById('progress-bar-inner');
    if (progressBarInner) {
      progressBarInner.style.width = '50%';
    }
    console.log('Financials updated for option: Enhance Quality Control');
  }
}

// Rest of your existing code

// Countdown Timer with Circular Progress
const countdownDuration = 5 * 60; // 5 minutes in seconds
let remainingTime = countdownDuration;
const timerElement = document.getElementById('countdown-timer');
const progressCircle = document.querySelector('.progress');
const totalDash = 251; // Circumference for r=40 (2 * π * 40 ≈ 251)

// Initialize the progress circle
progressCircle.style.strokeDasharray = totalDash;
progressCircle.style.strokeDashoffset = totalDash;

// Function to update the timer and progress
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
    window.location.href = "page2.html"; // Redirect to page2 or desired action
  }
}

// Initialize the timer
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
      data: [400, 0], // Initial data
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
