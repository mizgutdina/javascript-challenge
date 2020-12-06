// from data.js
var tableData = data;
//console.log(data)

// YOUR CODE HERE!
//Reference to table body
var tbody = d3.select(`tbody`)

//Loop through data and console.log each ufo sighting object
tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append(`tr`)
    row.append(`td`).text(ufoData.datetime)
    row.append(`td`).text(ufoData.city)
    row.append(`td`).text(ufoData.state)
    row.append(`td`).text(ufoData.country)
    row.append(`td`).text(ufoData.shape)
    row.append(`td`).text(ufoData.durationMinutes)
    row.append(`td`).text(ufoData.comments)
})

//Event
var button = d3.select(`button`);

buttons.on(`click`, function() {
    console.log(`You clicked button!`);
    console.log(d3.event.target)
})

var input = d3.select(`#datetime`);





//Filter
function selectDate(ufoSight) {
    if (d3.event.target.value === tableData.datetime) {
        return true;
    } else {
        return false;
    }
}

var ufoOutput = tableData.filter(selectDate)