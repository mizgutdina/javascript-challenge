// from data.js
var tableData = data;
//console.log(data)

// YOUR CODE HERE!
//1. Build the table
//Reference to table body
var tbody = d3.select(`tbody`)

//Loop through data and buld the table - Function Build the Table
function buildTable(data) {

    tbody.html("");
    data.forEach(function(ufoData) {
        console.log(ufoData);
    
        var row = tbody.append(`tr`)
        row.append(`td`).text(ufoData.datetime)
        row.append(`td`).text(ufoData.city)
        row.append(`td`).text(ufoData.state)
        row.append(`td`).text(ufoData.country)
        row.append(`td`).text(ufoData.shape)
        row.append(`td`).text(ufoData.durationMinutes)
        row.append(`td`).text(ufoData.comments)
}) }


buildTable(tableData)

//2. Handle clicks
//Event 
//Function Handle click (got help from a tutor on this section)

function handleClick() {
    var input = d3.select(`#datetime`).property(`value`); 
    var filteredData = tableData;
    if (input) {
        filteredData = filteredData.filter(rowData => rowData.datetime === input);
    } 
    buildTable(filteredData)

}


// 3. Listen to events
var button = d3.selectAll(`#filter-btn`);
button.on(`click`, handleClick) 
