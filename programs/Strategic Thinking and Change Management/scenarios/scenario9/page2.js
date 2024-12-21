// Countdown Timer Configuration
const countdownDuration = 5 * 60; // 5 minutes in seconds
let loadDataFlag=false;
let remainingTime = countdownDuration;
const timerElement = document.getElementById('countdown-timer');
const progressCircle = document.querySelector('.progress');
const totalDash = 226.08; // Circumference for r=36 (2 * π * 36)

function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update circular progress
    const progressOffset = totalDash - (remainingTime / countdownDuration) * totalDash;
    progressCircle.style.strokeDashoffset = progressOffset;

    // Change color based on time remaining
    if (remainingTime <= 60) {
        progressCircle.style.stroke = '#ff4e4e';
    } else if (remainingTime <= 180) {
        progressCircle.style.stroke = '#f1c40f';
    } else {
        progressCircle.style.stroke = '#4E67EB';
    }

    if (remainingTime > 0) {
        remainingTime--;
    } else {
        clearInterval(timerInterval);
        clearInterval(progressInterval);
        alert('Time is up! The simulation will now end.');
        window.location.href = "index.html";
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
// Initialize Timer
progressCircle.style.strokeDasharray = totalDash;
progressCircle.style.strokeDashoffset = '0';
updateTimer();
const timerInterval = setInterval(updateTimer, 1000);

// Progress Bar Update
const progressBarInner = document.getElementById('progress-bar-inner');
function updateProgressBar() {
    const elapsedTime = countdownDuration - remainingTime;
    const progressPercentage = (elapsedTime / countdownDuration) * 100;
    progressBarInner.style.width = `${progressPercentage}%`;
}

updateProgressBar();
const progressInterval = setInterval(updateProgressBar, 1000);

// Expandable Rows in Tables
document.querySelectorAll('.expandable').forEach(row => {
    row.addEventListener('click', () => {
        const icon = row.querySelector('i');
        let sibling = row.nextElementSibling;
        
        while (sibling && sibling.classList.contains('hidden-row')) {
            sibling.style.display = sibling.style.display === 'table-row' ? 'none' : 'table-row';
            sibling = sibling.nextElementSibling;
        }
        
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
});

// Vertical Bar Chart Configuration
const ctx = document.getElementById('partnershipChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Revenue', 'Net Income'],
        datasets: [
            {
                label: 'Before Scenario',
                data: [400, 45],
                backgroundColor: '#4E67EB',
                borderColor: '#4E67EB',
                borderWidth: 1
            },
            {
                label: 'After Scenario',
                data: [430, 52.5],
                backgroundColor: '#f1c40f',
                borderColor: '#f1c40f',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Financial Impact Before and After the Scenario'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount (INR Lakhs)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Metrics'
                }
            }
        },
        barPercentage: 0.8,
        categoryPercentage: 0.9
    }
});

// Accessibility Improvements
document.querySelectorAll('.btn').forEach(button => {
    button.setAttribute('role', 'button');
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
});

// Page Load Animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});