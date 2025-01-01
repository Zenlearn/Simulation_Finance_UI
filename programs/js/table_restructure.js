function table_cleaning()
{


// Call the function
//  removeValuationRatios();
  console.log("table cleaning")
  
  // Call the function
  // updateProfitLossTable()
   // Create a Promise that resolves when both tasks are complete
   Promise.all([removeValuationRatios(), updateProfitLossTable()])
   .then(() => {
     // Trigger a custom event after both tasks are finished
     const event = new CustomEvent('tableCleaningComplete');
     document.dispatchEvent(event); 
     console.log("table cleaning complete"); 
   })
   .catch(error => {
     console.error("Error during table cleaning:", error);
     // Optionally, trigger a different event for errors
     const errorEvent = new CustomEvent('tableCleaningError', { detail: error });
     document.dispatchEvent(errorEvent); 
   });

}

function removeValuationRatios() {
  // Select all expandable rows
  const expandableRows = document.querySelectorAll("tr.expandable");

  expandableRows.forEach(row => {
    const categoryText = row.textContent.trim();
    
    // Check if the category is "Valuation Ratios"
    if (categoryText.includes("Valuation Ratios")) {
      
      
      // Select the next sibling rows and remove them until another expandable row is found
      let sibling = row.nextElementSibling;
      console.log("row cleaning",sibling)
      while (sibling && !sibling.classList.contains("expandable")) {
        const nextSibling = sibling.nextElementSibling;
        console.log("row cleaning",nextSibling)
        sibling.remove();
        sibling = nextSibling;
      }

      // Remove the category row
      row.remove();
    }
  });
}

function updateProfitLossTable() {
    // Identify the Profit & Loss table by its heading
    const tables = document.querySelectorAll(".table"); // Select all tables with class 'table'
    
    let profitLossTable = null;
  
    // Loop through tables to find the one with "Profit & Loss (Income) Statement" heading
    tables.forEach(table => {
      const heading = table.querySelector("thead th");
      if (heading && heading.textContent.includes("Profit & Loss (Income) Statement")) {
        profitLossTable = table;
      }
    });
  
    if (profitLossTable) {
      // Select the table body
      const tableBody = profitLossTable.querySelector("tbody");
  
      // Find the row containing "Operating Expenses"
      const rows = tableBody.querySelectorAll("tr");
      let operatingExpensesRow = null;
  
      rows.forEach(row => {
        if (row.textContent.includes("Operating Expenses")) {
          operatingExpensesRow = row;
        }
      });
  
      if (operatingExpensesRow) {
        // Update the existing row to "Operating Expenses - Payroll"
        operatingExpensesRow.querySelector("td").textContent = "Operating Expenses - Payroll";
  
        // Create "Operating Expenses - Non-Payroll" row
        const nonPayrollRow = document.createElement("tr");
        nonPayrollRow.innerHTML = `
          <td>Operating Expenses - Non-Payroll</td>
          <td>0</td>
        `;
  
        // Create "Depreciation and Amortization Expense" row
        const depreciationRow = document.createElement("tr");
        depreciationRow.innerHTML = `
          <td>Depreciation and Amortization Expense</td>
          <td>0</td>
        `;
  
        // Insert the new rows after the "Operating Expenses - Payroll" row
        operatingExpensesRow.insertAdjacentElement("afterend", depreciationRow);
        operatingExpensesRow.insertAdjacentElement("afterend", nonPayrollRow);
      }
    }
  }

  
  document.addEventListener("DOMContentLoaded", () => {
  table_cleaning()
  });
