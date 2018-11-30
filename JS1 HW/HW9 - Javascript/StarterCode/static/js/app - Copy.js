// from data.js
var tableData = data;
var filteredTable = tableData;
// YOUR CODE HERE!
var submit = document.getElementById("login");
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");

var dateInput = document.querySelector("#datetime");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#cityInput");
var $stateInput = document.querySelector("#stateInput");
var $countryInput = document.querySelector("#countryInput");
var $shapeInput = document.querySelector("#shapeInput");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButtons, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonNewClick);

// renderTable renders the filteredAddresses to the tbody
var filteredDates = data;
var filteredCities = data;
var filteredStates = data;
var filteredCountries = data;
var filteredShapes = data;
var filteredUfoData = data


// renderTables render the filtered dataSets to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredUfoData.length; i++) {
      // Get the current data object and its fields
      var  dates= filteredUfoData[i];
      var fields = Object.keys(dates);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current data's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = dates[field];
      }
    }
  }

  function renderTableCity() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredCities.length; i++) {
      // Get get the current data
      var cities = filteredCities[i];
      var fields = Object.keys(cities);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the object, create a new cell and set its inner text to be the current value 
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = cities[field];
      }
    }
  }

  function renderTableState() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredStates.length; i++) {
      // Get get the current data
      var states = filteredStates[i];
      var fields = Object.keys(states);
      // Create a new row in the tbody, set the index to be i + starting Index
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the object, create a new cell and set its inner text to be the current value 
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = states[field];
      }
    }
}

function renderTableCountry() {
  tbody.innerHTML = "";
  for (var i = 0; i < filteredCountries.length; i++) {
    // Get get the current data
    var countries = filteredCountries[i];
    var fields = Object.keys(countries);
    // Create a new row in the tbody, set the index to be i + starting Index
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the object, create a new cell and set its inner text to be the current value 
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = countries[field];
    }
  }
}

function renderTableShape() {
  tbody.innerHTML = "";
  for (var i = 0; i < filteredShapes.length; i++) {
    // Get get the current data
    var shapes = filteredShapes[i];
    var fields = Object.keys(shapes);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the object, create a new cell and set its inner text to be the current value 
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = shapes[field];
    }
  }
}

renderTable();

// HANDLE SEARCHS// 

// handle click function for when user searches by date
function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace
    var filterDate = dateInput.value.trim()

    // Set filteredDate to an array of all dates s whose "datetime" matches the filter
    filteredDates= data.filter(function(date) {
      var dateEntered = date.datetime;
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return dateEntered === filterDate;
    });
    renderTable();
  }

  function handleSearchButtonNewClick() {
    
    var filterDate = $dateInput.value.trim();
    var filterCity = $cityInput.value.trim();
    var filterState = $stateInput.value.trim();
    var filterCountry = $countryInput.value.trim();
    var filterShape = $shapeInput.value.trim();
    console.log(filterCity)
    filteredUfoData = data.filter(function(ufo) {
        var ufoDate = ufo.datetime;
        var ufoCity = ufo.city;
        var ufoState = ufo.state;
        var ufoCountry = ufo.country;
        var ufoShape = ufo.shape;
    
        
        return (ufoDate === filterDate || filterDate === "") && (ufoCity === filterCity || filterCity === "") && (ufoState === filterState || filterState === "") && (ufoCountry === filterCountry || filterCountry === "") && (ufoShape === filterShape || filterShape === "")   
      });
console.log(filteredUfoData)
      renderTable();
  }
