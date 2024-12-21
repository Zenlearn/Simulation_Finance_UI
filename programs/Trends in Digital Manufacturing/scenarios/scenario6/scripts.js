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
  highValue: `
Accounting Entries for High-Value Proposal

Entry 1: Proposal Preparation Costs for Submission
Debit: 70 Administrative Expenses INR 2,50,000
Credit: 12 Cash/Bank INR 2,50,000
(Costs for preparing and submitting the RFP proposal, including consulting and legal fees.)

Entry 2: Revenue from Winning the RFP
Debit: 13 Accounts Receivable INR 20,00,000
Credit: 40 Sales Revenue INR 20,00,000
(Revenue booked from winning and fulfilling 1st year of the multi-year supply contract - 20% of INR 1,00,00,000)

Entry 3: Increase in inventory to meet higher demand
Debit: 14 Inventory INR 10,00,000
Credit: 12 Cash/Bank INR 10,00,000

Entry 4: Production Costs Due to RFP Fulfillment
Debit: 50 Cost of Goods Sold (COGS) (P&L) INR 10,00,000
Credit: 14 Inventory (Balance Sheet) INR 10,00,000
(Cost of fulfilling the RFP contract.)

Entry 5: Customer Payment (Next Quarter)
Debit: 12 Cash/Bank (Cash Flow) INR 20,00,000
Credit: 13 Accounts Receivable (Balance Sheet) INR 20,00,000

Closing Entries:
Entry 6: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue (P&L) INR 20,00,000
Credit: 27 Retained Earnings (Equity) INR 20,00,000

Entry 7: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR 12,50,000
Credit: 70 Administrative Expenses (P&L) INR 2,50,000
Credit: 50 COGS (P&L) INR 10,00,000
  `,

  valueAdded: `
Accounting Entries for Value-Added Services Costs

Entry 1: Customization cost to augment inventory
Debit: 14 Inventory INR 3,00,000
Credit: 12 Cash/Bank INR 3,00,000

Entry 2: Additional Costs for Customization/After-Sales Support transferred to cost
Debit: 50 COGS INR 3,00,000
Credit: 14 Inventory INR 3,00,000
(Increased costs associated with offering additional value-added services in the proposal.)

Entry 3: Revenue from Customized RFP
Debit: 13 Accounts Receivable INR 20,00,000
Credit: 40 Sales Revenue INR 20,00,000
(Revenue booked from winning and fulfilling 1st year of the multi-year supply contract - 40%)

Entry 4: Increase in inventory to meet higher demand
Debit: 14 Inventory INR 10,00,000
Credit: 12 Cash/Bank INR 10,00,000

Entry 5: Production Costs Due to Customization/After-Sales Support Order
Debit: 50 Cost of Goods Sold (COGS) (P&L) INR 10,00,000
Credit: 14 Inventory (Balance Sheet) INR 10,00,000

Entry 6: Customer Payment (Next Quarter)
Debit: 12 Cash/Bank (Cash Flow) INR 20,00,000
Credit: 13 Accounts Receivable (Balance Sheet) INR 20,00,000

Closing Entries:
Entry 7: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue (P&L) INR 20,00,000
Credit: 27 Retained Earnings (Equity) INR 20,00,000

Entry 8: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR 13,00,000
Credit: 70 Administrative Expenses (P&L) INR 3,00,000
Credit: 50 COGS (P&L) INR 10,00,000
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
  if (option === 'highValue') {
    modalTitle.textContent = 'Accounting Entries for High-Value Proposal';
    modalEntries.textContent = accountingEntries.highValue;
  } else if (option === 'valueAdded') {
    modalTitle.textContent = 'Accounting Entries for Value-Added Services Costs';
    modalEntries.textContent = accountingEntries.valueAdded;
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
  if (option === 'highValue') {
    // Update chart data and financial tables for High-Value Proposal
    revenueChart.data.datasets[0].data[1] = 1000; // Example value after implementation
    revenueChart.options.plugins.title.text = 'After High-Value Proposal Scenario';
    revenueChart.update();
    // Update progress bar as an example
    const progressBarInner = document.getElementById('progress-bar-inner');
    if (progressBarInner) {
      progressBarInner.style.width = '50%';
    }
    console.log('Financials updated for option: High-Value Proposal');
  } else if (option === 'valueAdded') {
    // Update chart data and financial tables for Value-Added Services
    revenueChart.data.datasets[0].data[1] = 500; // Example value after implementation
    revenueChart.options.plugins.title.text = 'After Value-Added Services Scenario';
    revenueChart.update();
    // Update progress bar as an example
    const progressBarInner = document.getElementById('progress-bar-inner');
    if (progressBarInner) {
      progressBarInner.style.width = '50%';
    }
    console.log('Financials updated for option: Value-Added Services');
  }
}

// The rest of your code inside DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Countdown Timer with Circular Progress
  const countdownDuration = 5 * 60; // 5 minutes in seconds
  let remainingTime = countdownDuration;
  const timerElement = document.getElementById('countdown-timer');
  const progressCircle = document.querySelector('.progress');
  const totalDash = 2 * Math.PI * 36; // Circumference for r=36 (~226.195)

  if (!timerElement || !progressCircle) {
    console.error('Timer elements not found.');
    // Optionally, hide the timer or provide fallback functionality
  } else {
    // Initialize the timer
    progressCircle.style.strokeDasharray = `${totalDash}`;
    progressCircle.style.strokeDashoffset = `${totalDash}`;
    progressCircle.style.stroke = '#4E67EB'; // Initial color
    updateTimer(); // Initial call
    const timerInterval = setInterval(updateTimer, 1000);

    // Progress Bar Update synchronized with the countdown timer
    const progressBarInner = document.getElementById('progress-bar-inner');
    if (!progressBarInner) {
      console.error('Progress bar element not found.');
    } else {
      updateProgressBar(); // Initial call
      const progressInterval = setInterval(updateProgressBar, 1000);
    }

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
        window.location.href = "page2.html"; // Redirect to page2.html or desired action
      }
    }

    function updateProgressBar() {
      const elapsedTime = countdownDuration - remainingTime;
      const progressPercentage = (elapsedTime / countdownDuration) * 100;
      progressBarInner.style.width = `${progressPercentage}%`;
    }
  }

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
  if (!ctx) {
    console.error('Canvas element for revenueChart not found.');
    return;
  }

  window.revenueChart = new Chart(ctx, {
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
});
