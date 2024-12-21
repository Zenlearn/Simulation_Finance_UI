
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
    window.location.href = "index.html"; // Redirect to index or desired action
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

// Function to handle option selection
function chooseOption(option) {
  if (option === 'competitive') {
    // Competitive Bid selected
    revenueChart.data.datasets[0].data[1] = 500; // Example value after implementation
    updateFinancials('competitive');
  } else if (option === 'joint') {
    // Joint Bid selected
    revenueChart.data.datasets[0].data[1] = 250; // Example value after implementation
    updateFinancials('joint');
  }
  revenueChart.update();
  // Update progress bar as an example
  progressBarInner.style.width = '50%';
}

// Function to update financial tables based on option
function updateFinancials(option) {
  // This function would update the financial tables with new data based on the selected option
  console.log('Financials updated for option:', option);
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

// Accounting entries data
const accountingEntries = {
  competitive: `
Accounting Entries for Competitive Bid for the Project

Entry 1: Bid Preparation Costs, including legal and consultant fees
Debit: 70 Administrative Expenses (P&L) INR 1,50,000
Credit: 12 Cash/Bank (BS) INR 1,50,000

Entry 2: Revenue from winning bid and Successful execution
Debit: 13 Accounts Receivable (Balance Sheet) INR 50,00,000
Credit: 40 Sales Revenue (P&L) INR 50,00,000

Entry 3: Increase in inventory to meet higher demand
Debit: 14 Inventory INR 25,00,000
Credit: 12 Cash/Bank INR 25,00,000

Entry 4: Increase in production costs due to higher demand
Debit: 50 Cost of Goods Sold (COGS) (P&L) INR 25,00,000
Credit: 14 Inventory (Balance Sheet) INR 25,00,000

Entry 5: Cash inflow from customer payments
Debit: 12 Cash/Bank (BS) INR 50,00,000
Credit: 13 Accounts Receivable (Balance Sheet) INR 50,00,000

Closing Entries:
Entry 6: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue (P&L) INR 50,00,000
Credit: 27 Retained Earnings (Equity) INR 50,00,000

Entry 7: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR 26,50,000
Credit: 70 Administrative Expenses (P&L) INR 1,50,000
Credit: 50 COGS (P&L) INR 25,00,000
`,
  joint: `
Accounting Entries for Joint Bid

Entry 1: Sharing Bid Costs 50:50 with the partnering firm
Debit: 70 Administrative Expenses INR 75,000
Credit: 12 Cash/Bank INR 75,000

Entry 2: Revenue from Successful Bid
Debit: 13 Accounts Receivable INR 25,00,000
Credit: 40 Sales Revenue INR 25,00,000

Entry 3: Increase in inventory to meet higher demand
Debit: 14 Inventory INR 12,50,000
Credit: 12 Cash/Bank INR 12,50,000

Entry 4: Increase in production costs due to higher demand
Debit: 50 Cost of Goods Sold (COGS) (P&L) INR 12,50,000
Credit: 14 Inventory (Balance Sheet) INR 12,50,000

Entry 5: Cash inflow from customer payments
Debit: 12 Cash/Bank INR 25,00,000
Credit: 13 Accounts Receivable INR 25,00,000

Closing Entries:
Entry 6: Closing Revenue Accounts, transferring the total revenue to Retained Earnings
Debit: 40 Sales Revenue INR 25,00,000
Credit: 27 Retained Earnings (Equity) INR 25,00,000

Entry 7: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR 13,25,000
Credit: 70 Administrative Expenses (P&L) INR 75,000
Credit: 50 COGS (P&L) INR 12,50,000
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
  if (option === 'competitive') {
    modalTitle.textContent = 'Accounting Entries for Competitive Bid for the Project';
    modalEntries.textContent = accountingEntries.competitive;
  } else if (option === 'joint') {
    modalTitle.textContent = 'Accounting Entries for Joint Bid';
    modalEntries.textContent = accountingEntries.joint;
  }

  // Display the modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  // Add event listener to the Proceed button
  proceedButton.onclick = function () {


    // window.location.href = 'page2.html'; // Redirect to the next page

     // Call the utility function with the API URL and next page URL
  // const apiUrl = 'https://example.com/api/validate'; // Replace with your API endpoint
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
