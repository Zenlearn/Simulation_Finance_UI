document.addEventListener("DOMContentLoaded", () => {
   

  proceedButton();
  footerButtons();
  // loadMockResponse();

  
  });






  function proceedButton (){
    {
      // Identify the proceedButton
      const proceedButton = document.querySelector('[id="proceed-button"]');
      
    
      console.log("added listener",proceedButton);
      if (proceedButton) {
        // Add a click event listener to the button
        proceedButton.addEventListener("click", () => {
          const nextPageUrl = "page2.html"; // Replace with the target page
    
          // Fetch the scenario title from the element with class 'scenario'
          const scenarioTitle = document.querySelector(".scenario");
    
          // Assuming 'option' is available globally or predefined
          const option = "defaultOption"; // Replace with the actual value if necessary
    
          // Construct the scenarioDetail object
          const scenarioDetail = {
            option: option,
            scenario: scenarioTitle ? scenarioTitle.innerText : "Default Scenario",
          };
    
          console.log("Scenario Detail:", scenarioDetail);
    
          // Call proceedWithApiCall with required parameters
          proceedWithApiCall(1, option, nextPageUrl, scenarioDetail);
        });
      } else {
        console.error("Button with name 'proceedButton' not found.");
      }
    }
  }

  function footerButtons () {
    // Get the parent container for the buttons
    const footerButtons = document.querySelector('.footer-buttons');
    
    // Ensure the parent exists
    if (footerButtons) {
      // Get all anchor tags inside the footer-buttons div
      const buttons = footerButtons.querySelectorAll('a.next-button');
  
      // Loop through each button and attach an event listener
      buttons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
          // Check if the parent class is 'footer-buttons'
          if (button.closest('.footer-buttons')) {
            console.log(`Button ${index + 1} clicked:`, button.textContent); // Get the button text or content

            localStorage.setItem("bidOptionId",index + 1 );

          }
        });
      });
    }
  }

  function getBidOption()
  {
      return  localStorage.getItem("bidOptionId") || "1";
  }


    
  // https://drive.google.com/file/d/1KdXbUdG-G-c5peswRr5oARGkyi50eMLT/view?usp=sharing
  

  function loadMockResponse() {
    // Create a new script element
    var script = document.createElement('script');
    
    // Set the src attribute to the Google Drive link
    script.src = 'https://drive.google.com/uc?export=download&id=1KdXbUdG-G-c5peswRr5oARGkyi50eMLT';
    script.src="https://drive.google.com/file/d/1KdXbUdG-G-c5peswRr5oARGkyi50eMLT/view?usp=sharing";
    
    // Optionally, set the script type
    script.type = 'application/javascript';
    
    // Append the script element to the body or head
    document.body.appendChild(script);

    // You can also append it to the head instead if desired
    // document.head.appendChild(script);
};
