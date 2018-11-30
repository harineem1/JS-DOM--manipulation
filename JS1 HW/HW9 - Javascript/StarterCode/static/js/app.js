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
$searchBtn.addEventListener("click", handleSearchButtonClick);

// renderTable renders the filteredAddresses to the tbody

var filteredUfoData = data


// renderTables render the filtered dataSets to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredUfoData.length; i++) {
      // Get the current data object and its fields
      var  aUFOData= filteredUfoData[i];
      var fields = Object.keys(aUFOData);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current data's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = aUFOData[field];
      }
    }
  }



// HANDLE SEARCHS// 

// handle click function for when user searches by date

  function handleSearchButtonClick() {
    
    var filterDate = $dateInput.value.trim();
    var filterCity = $cityInput.value.trim();
    var filterState = $stateInput.value.trim();
    var filterCountry = $countryInput.value.trim();
    var filterShape = $shapeInput.value.trim();
    filteredUfoData = data.filter(function(ufo) {
        var ufoDate = ufo.datetime;
        var ufoCity = ufo.city;
        var ufoState = ufo.state;
        var ufoCountry = ufo.country;
        var ufoShape = ufo.shape;
    
        
        return (ufoDate === filterDate || filterDate === "") && (ufoCity === filterCity || filterCity === "") && (ufoState === filterState || filterState === "") && (ufoCountry === filterCountry || filterCountry === "") && (ufoShape === filterShape || filterShape === "")   
      });
      renderTable();
  }

  
renderTable();
