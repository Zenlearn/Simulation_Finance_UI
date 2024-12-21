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
    window.location.href = "../../index.html"; // Adjust the path as needed
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
        text: 'Revenue Before the Scenario'
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
  productShowcase: `
Accounting Entries for Product Showcase and Discounts

Entry 1: Event Costs (Sales Day)
Debit: 70 Event Expenses INR 2,00,000
Credit: 12 Cash/Bank INR 2,00,000
(Costs for organizing the Sales Day event at the customer location.)

Entry 2: Revenue from Orders Placed During Sales Day
Debit: 13 Accounts Receivable INR 25,00,000
Credit: 40 Sales Revenue INR 25,00,000
(Revenue booked from sales generated at the event.)

Entry 3: Increase in inventory to meet higher demand
Debit: 14 Inventory INR 12,50,000
Credit: 12 Cash/Bank INR 12,50,000

Entry 4: Production Costs Due to Event Orders
Debit: 50 Cost of Goods Sold (COGS) (P&L) INR 12,50,000
Credit: 14 Inventory (Balance Sheet) INR 12,50,000

Entry 5: Customer Payment (Next Quarter)
Debit: 12 Cash/Bank (Cash Flow) INR 25,00,000
Credit: 13 Accounts Receivable (Balance Sheet) INR 25,00,000

Closing Entries:
Entry 6: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue (P&L) INR 25,00,000
Credit: 27 Retained Earnings (Equity) INR 25,00,000

Entry 7: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR (Administrative Expenses + COGS) 14,50,000
Credit: 70 Administrative Expenses (P&L) INR 2,00,000
Credit: 50 COGS (P&L) INR 12,50,000
  `,
  coHostCustomer: `
Accounting Entries for Collaborated Event

Entry 1: Shared Costs with Customer
Debit: 70 Event Expenses INR 1,00,000
Credit: 12 Cash/Bank INR 1,00,000
(Only half of the event costs are borne by the company.)

Entry 2: Revenue from Collaborated Sales Day Event
Debit: 13 Accounts Receivable INR 15,00,000
Credit: 40 Sales Revenue INR 15,00,000
(Revenue booked from sales generated at the event.)

Entry 3: Increase in inventory to meet higher demand
Debit: 14 Inventory INR 7,50,000
Credit: 12 Cash/Bank INR 7,50,000

Entry 4: Production Costs Due to Collaborated Sales Day Event
Debit: 50 Cost of Goods Sold (COGS) (P&L) INR 7,50,000
Credit: 14 Inventory (Balance Sheet) INR 7,50,000

Entry 5: Customer Payment (Next Quarter)
Debit: 12 Cash/Bank (Cash Flow) INR 15,00,000
Credit: 13 Accounts Receivable (Balance Sheet) INR 15,00,000

Closing Entries:
Entry 6: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue (P&L) INR 15,00,000
Credit: 27 Retained Earnings (Equity) INR 15,00,000

Entry 7: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR (Administrative Expenses + COGS) 8,50,000
Credit: 70 Administrative Expenses (P&L) INR 1,00,000
Credit: 50 COGS (P&L) INR 7,50,000
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
  if (option === 'productShowcase') {
    modalTitle.textContent = 'Accounting Entries for Product Showcase and Discounts';
    modalEntries.textContent = accountingEntries.productShowcase;
  } else if (option === 'coHostCustomer') {
    modalTitle.textContent = 'Accounting Entries for Collaborated Event';
    modalEntries.textContent = accountingEntries.coHostCustomer;
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
  if (option === 'productShowcase') {
    // Update chart data and financial tables for Product Showcase
    revenueChart.data.datasets[0].data[1] = 25; // INR 25,00,000 represented as 25
    revenueChart.options.plugins.title.text = 'Revenue After Product Showcase and Discounts';
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = '50%';
    console.log('Financials updated for option: Product Showcase and Discounts');
  } else if (option === 'coHostCustomer') {
    // Update chart data and financial tables for Co-host with Customer
    revenueChart.data.datasets[0].data[1] = 15; // INR 15,00,000 represented as 15
    revenueChart.options.plugins.title.text = 'Revenue After Collaborated Event';
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = '50%';
    console.log('Financials updated for option: Collaborated Event');
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
