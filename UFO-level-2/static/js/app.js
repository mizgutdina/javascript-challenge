// from data.js
var tableData = data;
//console.log(data)

// YOUR CODE HERE!
//1. Build the table
//Reference to table body

var tbody = d3.select(`tbody`)

//Function that loop through data and build the table
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

function handleClick() {
    var input = d3.select(`#datetime`).property(`value`); 
    var inputCity = d3.select(`#city`).proverty(`value`);
    var inputState = d3.select(`#state`).proverty(`value`);
    var inputCountry = d3.select(`#country`).property(`value`);
    var inputShape = d3.select(`#shape`).property(`value`);

    var filteredData = tableData;
    if (input) {
        filteredData = filteredData.filter(rowData => rowData.datetime === input);
    } 
    buildTable(filteredData)
    // if (inputCity) {
    //     filteredData = filteredData.filter(rowData => rowData.city === inputCity);
    // }
    // buildTable(filteredData)
}

//3. Listen to changes

var button = d3.selectAll(`#filter-btn`);
button.on(`click`, handleClick) 
