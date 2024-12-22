// utils.js
let apiUrl="http://65.2.50.101:8088/api/simulation/calculated-amounts?scenarioId=1&bidOptionId=1"

/**
 * Call an API and navigate to the next page.
 * @param {string} apiUrl - The API endpoint to call.
 * @param {string} nextPageUrl - The URL to navigate to after a successful API call.
 */
async function proceedWithApiCall(scenario, option,nextPageUrl,scenariondetails) {
    try {
      // Show a loading indicator (optional)
      document.body.style.cursor = 'wait';

       // Set the OptionId based on the option
      if (option === 'competitive') {
        apiUrl+="&bidOptionId=1"
      } else if (option === 'joint') {
        apiUrl+="&bidOptionId=2"
      }
  
      // Make the API call
      // const response = await fetch(apiUrl, {
      //   method: 'GET', // Change to POST if needed
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
     
  
      // if (!response.ok) {
      //   throw new Error(`API call failed with status: ${response.status}`);
      // }
  
      // // Parse the API response if needed
      // const result = await response.json();
      // complete logic result.add{ "option":option,"details":scenariondetails}

      let result={
        "assets": [0, 2350000, 0, 0, 2350000, 0, 0, 0, 0, 2350000],
        "liabilities": [0, 0, 0, 0, 0, 0, 0, 0, 2350000, 2350000],
        "pnl": [5000000, -2500000, 7500000, 0, -150000, 0, 7650000, 0, 0, 7650000, 0, 7650000],
        "cashflow": [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
        "ratios": [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
        "option":option,
        "details":scenariondetails
      };
      console.log('API Response:', result);
      let validResult=formatResult(result,scenariondetails,option);

      localStorage.setItem("assetdata",JSON.stringify(validResult));
  
      // Navigate to the next page
      window.location.href = nextPageUrl;
    } catch (error) {
      console.error('Error during API call:', error);
      alert('Failed to proceed. Please try again later.'); // Display an error message to the user
    } finally {
      // Reset the cursor
      document.body.style.cursor = 'default';
    }
  }

function getAssetData()
{
  return localStorage.getItem("assetdata");
}

function formatResult(data,scenarioDetail,option)
{
  

  // Define the range or indexes for each key
  const assetRange = [0, 9]; // Select values from index 0 to 4 (inclusive)
  const liabilityRange = [0, 9]; // Select values at indexes 8 and 9
  const pnlrange = [0,11]; // Select values at indexes 0, 2, 6, 9
  const cashflowRange = [0, 3]; // Select values from index 0 to 13 (inclusive)
  const ratiosRange = [0, 13]; // Select values from index 0 to 13 (inclusive)

  // Initialize an empty array to store selected values
  let selectedValues = [];

  // Extract assets based on range
  selectedValues = selectedValues.concat(data.assets.slice(assetRange[0], assetRange[1] + 1));

  // Extract liabilities based on indexes
  // liabilityIndexes.forEach(index => {
  //   selectedValues.push(data.liabilities[index]);
  // });
  selectedValues = selectedValues.concat(data.liabilities.slice(liabilityRange[0], liabilityRange[1] + 1));


  // Extract pnl based on indexes
  // pnlIndexes.forEach(index => {
  //   selectedValues.push(data.pnl[index]);
  // });
  selectedValues = selectedValues.concat(data.pnl.slice(pnlrange[0],pnlrange[1] + 1));


  // Extract cashflow based on range
  selectedValues = selectedValues.concat(data.cashflow.slice(cashflowRange[0], cashflowRange[1] + 1));

  // Extract ratios based on range
  selectedValues = selectedValues.concat(data.ratios.slice(ratiosRange[0], ratiosRange[1] + 1));

  return {value:selectedValues,scenarioDetail,option};
}

