// scripts.js - External JavaScript for Scenario 6

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
      progressCircle.style.strokeDasharray = totalDash;
      progressCircle.style.strokeDashoffset = totalDash;
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
          window.location.href = '../../index.html'; // Redirect to index or desired action
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
  
    // Button Click Animations and Chart Updates
    document.querySelectorAll('.footer-buttons .end-button, .footer-buttons .next-button').forEach(button => {
      button.addEventListener('click', (e) => {
        // Prevent default action if necessary
        // e.preventDefault();
  
        // Example: Update chart data based on button clicked
        if (button.classList.contains('end-button')) {
          // End Simulation button clicked
          // Optionally, perform any specific action here
        } else if (button.textContent.trim() === 'High-Value Proposal') {
          // High-Value Proposal selected
          revenueChart.data.datasets[0].data[1] = 1000; // Example value
          revenueChart.options.plugins.title.text = 'After High-Value Proposal Scenario';
        } else if (button.textContent.trim() === 'Value-Added Services') {
          // Value-Added Services selected
          revenueChart.data.datasets[0].data[1] = 500; // Example value
          revenueChart.options.plugins.title.text = 'After Value-Added Services Scenario';
        }
        revenueChart.update();
  
        // Update progress bar as an example (you can customize as needed)
        if (button.classList.contains('next-button')) {
          // Example: Increase progress by 10%
          const currentWidth = parseFloat(progressBarInner.style.width) || 0;
          const newWidth = Math.min(currentWidth + 10, 100);
          progressBarInner.style.width = `${newWidth}%`;
        }
      });
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
  