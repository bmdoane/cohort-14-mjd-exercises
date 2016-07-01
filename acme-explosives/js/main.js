"use strict"

// This function does one thing, and returns a promise
let loadCategories = function() {
  return new Promise((resolve, reject) => {
    $.ajax("json/categories.json")

    .done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

// This function does one thing, and returns a promise
// Passing in result of firstXHR would be to build object
let loadTypes = function(result_of_firstXHR) {
  return new Promise((resolve, reject) => {
    $.ajax("json/types.json")

    .done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

// This function does one thing, and returns a promise
let loadProducts = function(result_of_secondXHR) {
  return new Promise((resolve, reject) => {
    $.ajax("json/products.json")

    .done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

/*
  Now we use those Promises to describe the order of execution, 
  and how data flows between each one.

  Note how the resolve callback function, itself, returns another
  promise. This is how you can chain promises, and dictate the
  order of execution of multiple aynschronous operations.
 */

// Defined in the event listener
let selectedCategoryId;

let categories;
let types;
let products;

// Need function here to call what event cat fires
function loadData() {
  loadCategories()
    .then(function(data1) {
      categories = data1.categories;
      return loadTypes(data1);
    })
    .then(function(data2) {
      types = data2.types
      return loadProducts(data2);
    }).then(function(data3){
      products = data3.products;
      // This is where all the info is present in this asynchronous operation
      //console.log("categories", categories);
      //console.log("types", types);
      //console.log("products", products);
      // Here is where you use a function to display info 
      buildDOM(); 
    });
}


const $outputEl = $('#output');
let outputString;
let count;

function buildDOM() {
  count = 0;
  outputString = "";

  // Define the object of the selected category
  let selectedCategoryObject = categories[selectedCategoryId];
  console.log("selectedCategoryObject", selectedCategoryObject);

  // Assign variables to the current selection
  let currentCategory;
  let currentType;
  let currentProduct;

  // Loop through types by ID
  for (let i = 0; i < types.length; i++) {
    currentType = types[i];
    //console.log("currentType", currentType);
    currentCategory = currentType.category;
    //console.log("currentCategory", currentCategory);

    if (currentCategory !== selectedCategoryId) {
      continue;
    }
    //console.log("currentTypeSelected", currentType);

    // Loop through products by ID
    for (let j = 0; j < products.length; j++) {
      currentProduct = products[j];

      if (currentProduct.type !== currentType.id) {
        continue;
      }
      console.log("currentProductSelected", currentProduct);

      if (count % 3 === 0) {
        outputString += `<div class='row'>`
      }
      outputString += `
      <div class='col-md-4 card'>
        <h4>Category:</h4>
        <p>${selectedCategoryObject.name}</p>
        <p>${currentType.name}</p>
        <p>${currentType.description}</p>
        <p>${currentProduct.name}</p>
        <p>${currentProduct.description}</p>
      </div>`

      if ((count+1) % 3 === 0) {
        outputString += `</div>`
      count++;
      }
    }

  }
  $outputEl.html(outputString);
}

