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

var button1 = d3.select('.dropdown-item-1');
var button2 = d3.select('.dropdown-item-2');
var button3 = d3.select('.dropdown-item-3');
var button4 = d3.select('.dropdown-item-4');
var button5 = d3.select('.dropdown-item-5');

var form = d3.select('#datetime');

button1.on("click", runEnter1);
button2.on("click", runEnter2);
button3.on("click", runEnter3);
button4.on("click", runEnter4);
button5.on("click", runEnter5);

form.on("submit", runEnter);

function runEnter1() {
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
function runEnter2() {
    d3.event.preventDefault();
    var inputElement = d3.select('.form-control');
    var inputValue = inputElement.property('value');
    var filteredData = tableData.filter(filteredData => filteredData.city === inputValue);
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
function runEnter3() {
    d3.event.preventDefault();
    var inputElement = d3.select('.form-control');
    var inputValue = inputElement.property('value');
    var filteredData = tableData.filter(filteredData => filteredData.state === inputValue);
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
function runEnter4() {
    d3.event.preventDefault();
    var inputElement = d3.select('.form-control');
    var inputValue = inputElement.property('value');
    var filteredData = tableData.filter(filteredData => filteredData.country === inputValue);

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
function runEnter5() {
    d3.event.preventDefault();
    var inputElement = d3.select('.form-control');
    var inputValue = inputElement.property('value');
    var filteredData = tableData.filter(filteredData => filteredData.shape === inputValue);
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