// from data.js
var tableData = data;

// YOUR CODE HERE!
function tableArea(ufoSightings){
	// need to select tbody from html because table will be inserted there
	var tbody = d3.select("tbody");
	// "for each" data in the UFO data, I need to append or update the rows with the input data
	ufoSightings.forEach((ufoData) => {
		var row = tbody.append("tr");
		Object.entries(ufoData).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.html(value);
		});
	});
};

// clear table for new UFO data
function deleteInfo() {
	d3.select("tbody")
		.selectAll("tr").remove()
		.selectAll("td").remove();
};

// testing to be sure the data shows up? it does!
console.log(tableData);
tableArea(tableData);

// filter buttons --

// select "filter button" from html file
var button = d3.select("#filter-btn");

button.on("click", function(event) {
	d3.event.preventDefault();
	deleteInfo();
	var dateData = d3.select("#datetime").property("value");
	
	if (dateData.trim() === "" ) {
		// display database if no date available
		var filteredTable = tableData
	}
	else {
		var filteredTable = tableData.filter(ufoSightings => ufoSightings.datetime === dateData.trim());
	}
	
	// if nothing is found:
	
	if (filteredTable.length == 0) {
		d3.select("tbody")
			.append("tr")
			.append("td")
				.attr("colspan", 10)
				.html("<h4>No Records Found</h4>");
	}
	
	console.log(filteredTable);
	tableArea(filteredTable);
});
