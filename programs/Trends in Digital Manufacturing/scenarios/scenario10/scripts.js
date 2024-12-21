// scripts.js - External JavaScript for Scenario 10
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
  adjustMarketing: `
Accounting Entries for Short-term Solution: Adjust Marketing Budget

Entry 1: Marketing Campaign Investment
Debit: 70 Marketing Expense (P&L) INR 5,00,000
Credit: 12 Cash/Bank (Balance Sheet) INR 5,00,000

Entry 2: 5% Market Share Gain, Generating INR 20 Lakhs in Additional Sales
Debit: 13 Accounts Receivable (Balance Sheet) INR 20,00,000
Credit: 40 Revenue (P&L) INR 20,00,000

Entry 3: Increase in Inventory to Meet Higher Demand
Debit: 14 Inventory INR 10,00,000
Credit: 12 Cash/Bank INR 10,00,000

Entry 4: Impact on Inventory and Cost of Goods Sold (50% of Sales)
Debit: 50 Cost of Goods Sold (COGS) (P&L) INR 10,00,000
Credit: 14 Inventory (Balance Sheet) INR 10,00,000

Entry 5: Cash Inflow from Customer Payments
Debit: 12 Cash/Bank (Cash Flow Statement) INR 20,00,000
Credit: 13 Accounts Receivable (Balance Sheet) INR 20,00,000

Closing Entries:
Entry 6: Closing Revenue Accounts, Transferring the Total Revenue to Retained Earnings
Debit: 40 Sales Revenue (P&L) INR 20,00,000
Credit: 27 Retained Earnings (Equity) INR 20,00,000

Entry 7: Closing Expense Accounts, Transferring Total Expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR 15,00,000
Credit: 70 Administrative Expenses (P&L) INR 5,00,000
Credit: 50 COGS (P&L) INR 10,00,000
  `,

  introduceProduct: `
Accounting Entries for Medium-term Solution: Introduce New Product Line

Entry 1: Investment in New Product Line (R&D, Prototyping)
Debit: 70 R&D Expense (P&L) INR 20,00,000
Credit: 12 Cash/Bank (Balance Sheet) INR 20,00,000

Entry 2: Sales Increase (from the New Product Line)
Debit: 13 Accounts Receivable (Balance Sheet) INR 50,00,000
Credit: 40 Revenue (P&L) INR 50,00,000

Entry 3: Increase in Inventory to Meet Higher Demand
Debit: 14 Inventory INR 30,00,000
Credit: 12 Cash/Bank INR 30,00,000

Entry 4: Impact on Inventory and Cost of Goods Sold (COGS)
Debit: 50 Cost of Goods Sold (COGS) (P&L) INR 30,00,000
Credit: 14 Inventory (Balance Sheet) INR 30,00,000

Entry 5: Cash Inflow from Customer Payments
Debit: 12 Cash/Bank (Cash Flow Statement) INR 50,00,000
Credit: 13 Accounts Receivable (Balance Sheet) INR 50,00,000

Closing Entries:
Entry 6: Closing Revenue Accounts, Transferring the Total Revenue to Retained Earnings
Debit: 40 Sales Revenue (P&L) INR 50,00,000
Credit: 27 Retained Earnings (Equity) INR 50,00,000

Entry 7: Closing Expense Accounts, Transferring Total Expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR 50,00,000
Credit: 70 Administrative Expenses (P&L) INR 20,00,000
Credit: 50 COGS (P&L) INR 30,00,000
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
  if (option === 'adjustMarketing') {
    modalTitle.textContent = 'Accounting Entries for Short-term Solution: Adjust Marketing Budget';
    modalEntries.textContent = accountingEntries.adjustMarketing;
  } else if (option === 'introduceProduct') {
    modalTitle.textContent = 'Accounting Entries for Medium-term Solution: Introduce New Product Line';
    modalEntries.textContent = accountingEntries.introduceProduct;
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
  if (option === 'adjustMarketing') {
    // Update chart data and financial tables for Adjust Marketing Budget
    revenueChart.data.datasets[0].data[1] = 420; // Original 400 + 20 Lakhs
    revenueChart.options.plugins.title.text = 'After Adjusting Marketing Budget';
    revenueChart.update();
    // Update progress bar as an example
    const progressBarInner = document.getElementById('progress-bar-inner');
    if (progressBarInner) {
      progressBarInner.style.width = '50%';
    }
    console.log('Financials updated for option: Adjust Marketing Budget');
  } else if (option === 'introduceProduct') {
    // Update chart data and financial tables for Introduce New Product Line
    revenueChart.data.datasets[0].data[1] = 450; // Original 400 + 50 Lakhs
    revenueChart.options.plugins.title.text = 'After Introducing New Product Line';
    revenueChart.update();
    // Update progress bar as an example
    const progressBarInner = document.getElementById('progress-bar-inner');
    if (progressBarInner) {
      progressBarInner.style.width = '50%';
    }
    console.log('Financials updated for option: Introduce New Product Line');
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
        window.location.href = 'page2.html'; // Redirect to page2.html or desired action
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
