// page1.js

// Countdown Timer with Circular Progress
const countdownDuration = 5 * 60; // 5 minutes in seconds
let remainingTime = countdownDuration;
const timerElement = document.getElementById('countdown-timer');
const progressCircle = document.querySelector('.progress');
const totalDash = 2 * Math.PI * 40; // Circumference for r=40 ≈ 251.327

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
      data: [450, 0], // Initial data
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

// --- New code for modal functionality starts here ---

// Accounting entries data
const accountingEntries = {
  seasonalMarketing: `
Accounting Entries for Seasonal Marketing

**For capturing seasonal demand from marketing Investment:**

Entry 1: Marketing expenses
Debit: 70 Marketing Expense (P&L) INR 10,00,000
Credit: 12 Cash/Bank (Balance Sheet) INR 10,00,000

Entry 2: Increased sales during the season.
Debit: 13 Accounts Receivable (Balance Sheet) INR 60,00,000
Credit: 40 Revenue (P&L) INR 60,00,000

Entry 3: Increase in inventory to meet demand
Debit: 14 Inventory (Balance Sheet) INR 30,00,000
Credit: 12 Cash/Bank (Balance Sheet) INR 30,00,000

Entry 4: This reflects the increase in production costs due to higher demand and increased inventory
Debit: 50 Cost of Goods Sold (COGS) (P&L) INR 30,00,000
Credit: 14 Inventory (Balance Sheet) INR 30,00,000

Entry 5: Cash inflow from customer payments
Debit: 12 Cash/Bank (Cash Flow Statement) INR 60,00,000
Credit: 13 Accounts Receivable (Balance Sheet) INR 60,00,000

Closing Entries:
Entry 6: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue (P&L) INR 60,00,000
Credit: 27 Retained Earnings (Equity) INR 60,00,000

Entry 7: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR 40,00,000
Credit: 70 Administrative Expenses (P&L) INR 10,00,000
Credit: 50 COGS (P&L) INR 30,00,000
`,

  expandSalesChannels: `
Accounting Entries for Expand Sales Channels

**For “Expand sales channels” option:**

Entry 1: Investment in Expanding Sales Channels
Debit: 70 Marketing and Distribution Expenses INR 10,00,000
Credit: 12 Cash/Bank INR 10,00,000

Entry 2: Revenue Increase from New Channels
Debit: 13 Accounts Receivable INR 40,00,000
Credit: 40 Sales Revenue INR 40,00,000

Entry 3: Increase in inventory to meet higher demand
Debit: 14 Inventory INR 20,00,000
Credit: 12 Cash/Bank INR 20,00,000

Entry 4: Increase in Production Costs Due to Higher Sales Volume
Debit: 50 Cost of Goods Sold (COGS) INR 20,00,000
Credit: 14 Inventory INR 20,00,000

Entry 5: Cash Inflow from Customer Payments
Debit: 12 Cash/Bank INR 40,00,000
Credit: 13 Accounts Receivable INR 40,00,000

Closing Entries:
Entry 6: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue (P&L) INR 40,00,000
Credit: 27 Retained Earnings (Equity) INR 40,00,000

Entry 7: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR 30,00,000
Credit: 70 Administrative Expenses (P&L) INR 10,00,000
Credit: 50 COGS (P&L) INR 20,00,000
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
  if (option === 'seasonalMarketing') {
    modalTitle.textContent = 'Accounting Entries for Seasonal Marketing';
    modalEntries.textContent = accountingEntries.seasonalMarketing;
  } else if (option === 'expandSalesChannels') {
    modalTitle.textContent = 'Accounting Entries for Expand Sales Channels';
    modalEntries.textContent = accountingEntries.expandSalesChannels;
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
  if (option === 'seasonalMarketing') {
    // Update chart data and financial tables for Seasonal Marketing
    revenueChart.data.datasets[0].data[1] = 500; // Example value after implementation
    revenueChart.options.plugins.title.text = 'Values After Seasonal Marketing';
    revenueChart.data.datasets[0].backgroundColor = ['#4E67EB', '#2ecc71']; // Green for positive change
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = '50%';
    console.log('Financials updated for option: Seasonal Marketing');
  } else if (option === 'expandSalesChannels') {
    // Update chart data and financial tables for Expand Sales Channels
    revenueChart.data.datasets[0].data[1] = 480; // Example value after implementation
    revenueChart.options.plugins.title.text = 'Values After Expanding Sales Channels';
    revenueChart.data.datasets[0].backgroundColor = ['#4E67EB', '#f39c12']; // Orange for incentives
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = '50%';
    console.log('Financials updated for option: Expand Sales Channels');
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
