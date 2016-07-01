"use strict";

// Handling click events
// Value represents value on select elements
$("#explosives").change(function() {
 	selectedCategoryId = parseInt($('#explosives').val());
 	console.log("selectedCategoryId", selectedCategoryId);
 	loadData();
});

