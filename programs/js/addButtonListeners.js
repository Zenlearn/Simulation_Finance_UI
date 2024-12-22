document.addEventListener("DOMContentLoaded", () => {
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
  });
  