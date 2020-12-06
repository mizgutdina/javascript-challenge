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
//Get to Filter button
var button = d3.select(`button`);

//Function when the button is clicked
button.on(`click`, function() {
    console.log(`You clicked button!`);
    console.log(d3.event.target) //why does it say target of null
})

//Get to input in the field
var input = d3.select(`#datetime`);

//Function - typed date in the field
function inputDate() {
    var typedText = d3.event.target.value;
    console.log("Typed date is ", typedText);
    //how do I add the condition below
}

input.on(`change`, inputDate)



//Filter
function selectDate(ufoSight) {
    if (d3.event.target.value === tableData.datetime) {
        return true;
    } else {
        return false;
    }
}

var ufoOutput = tableData.filter(selectDate)