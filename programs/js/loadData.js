
 let loadDataFlag=false;


// Expandable Rows in Tables
const expandableRows = document.querySelectorAll('.expandable');
expandableRows.forEach(row => {
    console.log("expaning 'ogic")
    
  row.addEventListener('click', () => {
    const icon = row.querySelector('i');
    const nextRows = [];
   
    
 if (icon.classList.contains('fa-plus')) {
    
    // Show Data
    if(!loadDataFlag)
      {
        loadData();
        loadDataFlag=true;
      }
    else{
        console.log("Data Already Loaded");
      }
    } else {
    //   icon.classList.remove('fa-minus');
    //   icon.classList.add('fa-plus');
    }
  });
});
function loadData()
    {
      //populate data 
      
      
      let data=JSON.parse(getAssetData());
     
    
    
        // Get all rows (including hidden rows) in the table
        const tableRows = document.querySelectorAll('table tr');
        console.log(data,data.value.length,tableRows.length);
        let iterator=0;
    
        // Iterate through each row and populate the second column
        tableRows.forEach((row, index) => {
          // Ensure there's a second column (td)
          const tds = row.querySelectorAll('td');
          if (tds.length >= 2) {
            // Assuming the data has an array of values to populate the second column
            // For example, if the data has a `value` array, you can use index to match rows
           
              if(data.value.length>iterator ){
    
                console.log(tds,data.value[iterator],iterator,row.classList)
                tds[1].innerText = data.value[iterator]; // Assuming `value` is the key in your data object
                iterator++;
              }
    
          }
        });
    
    
    
}
