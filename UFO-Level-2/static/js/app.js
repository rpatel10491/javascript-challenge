// from data.js
var tableData = data;

var tbody = d3.select("tbody");

data.forEach(ufo => {
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

var button = d3.select('.btn');
var form = d3.select('#datetime');

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select('.form-control');
    var inputValue = inputElement.property('value');
    var filteredData = tableData.filter(filteredData => filteredData.datetime === inputValue);

    console.log(filteredData);

    tbody.html('');

    filteredData.forEach(ufo => {
        var row = tbody.append('tr');
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });

}