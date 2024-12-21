// scripts.js - External JavaScript for Scenario 21 Results
// Get the chatbot icon and popup elements
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotPopup = document.getElementById('chatbot-popup');

// Add event listener to the chatbot icon
chatbotIcon.addEventListener('click', () => {
  // Toggle the chatbot popup visibility
  chatbotPopup.style.display = chatbotPopup.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('DOMContentLoaded', () => {
  // Countdown Timer with Circular Progress
  const countdownDuration = 5 * 60; // 5 minutes in seconds
let loadDataFlag=false;
  let remainingTime = countdownDuration;
  const timerElement = document.getElementById('countdown-timer');
  const progressCircle = document.querySelector('.progress');
  const totalDash = 226.08; // Circumference for r=36 (2 * π * 36)

  if (!timerElement || !progressCircle) {
    console.error('Timer elements not found.');
    // Optionally, hide the timer or provide fallback functionality
  } else {
    // Initialize the timer
    progressCircle.style.strokeDasharray = totalDash;
    progressCircle.style.strokeDashoffset = totalDash;
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
      timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(
        seconds
      ).padStart(2, '0')}`;

      // Update circular progress
      const progressOffset =
        totalDash - (remainingTime / countdownDuration) * totalDash;
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
        window.location.href = 'index.html'; // Redirect to index or desired action
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
  expandableRows.forEach((row) => {
    row.addEventListener('click', () => {
      const icon = row.querySelector('i');
      const nextRows = [];
      let sibling = row.nextElementSibling;
      while (sibling && sibling.classList.contains('hidden-row')) {
        nextRows.push(sibling);
        sibling = sibling.nextElementSibling;
      }
      nextRows.forEach((r) => {
        r.style.display =
          r.style.display === 'table-row' ? 'none' : 'table-row';
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
  const ctx = document.getElementById('competitorChart').getContext('2d');
  if (!ctx) {
    console.error('Canvas element for competitorChart not found.');
    return;
  }

  const competitorChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Before Scenario', 'After Scenario'],
      datasets: [
        {
          label: 'Revenue (INR Lakhs)',
          data: [400, 430], // Updated data
          borderColor: '#4E67EB',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Net Income (INR Lakhs)',
          data: [45, 37.5], // Updated data
          borderColor: '#e74c3c',
          fill: false,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 20,
            padding: 15,
          },
        },
        title: {
          display: true,
          text: 'Financial Performance Before and After Competitor Entry',
        },
      },
      animation: {
        duration: 1000,
        easing: 'easeInOutQuad',
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Accessibility: Keyboard Navigation for Buttons
  const buttons = document.querySelectorAll('.end-button, .next-button');
  buttons.forEach((button) => {
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
