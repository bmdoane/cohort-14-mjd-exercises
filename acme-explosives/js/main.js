// This function does one thing, and returns a promise
var loadCategories = function() {
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
var loadTypes = function(result_of_firstXHR) {
  return new Promise((resolve, reject) => {
    $.ajax("json/types.json")

    .done(function(data) {
      var acmeObj = {
        jsonOne: result_of_firstXHR,
        jsonTwo: data
      }
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

// This function does one thing, and returns a promise
var loadProducts = function(result_of_secondXHR) {
  return new Promise((resolve, reject) => {
    $.ajax("json/products.json")

    .done(function(data) {
      var acmeObj = {
        
      }
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
var catArray = [];

loadCategories()
  .then(function(data1) {
    console.log("data1", data1);
    catArray.push(data1.categories)
    return loadTypes(data1);
  })
  .then(function(data2) {
   catArray.push(data2.types);
    return loadProducts(data2);
  }).then(function(data3){
    catArray.push(data3.products);
    console.log("catArray: ", catArray)
  });





// // ORIGINAL CODE
// // This function does one thing, and returns a promise
// var loadCategories = function() {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "json/categories.json"
//     }).done(function(data) {
//       resolve(data);
//     }).fail(function(xhr, status, error) {
//       reject(error);
//     });
//   })
// };

// // This function does one thing, and returns a promise
// var loadTypes = function(result_of_firstXHR) {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "json/types.json",
//       data: result_of_firstXHR
//     }).done(function(data) {
//       // create obj with first: second:
//       resolve(data);
//     }).fail(function(xhr, status, error) {
//       reject(error);
//     });
//   })
// };

// // This function does one thing, and returns a promise
// var loadProducts = function(result_of_secondXHR) {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "json/products.json",
//       data: result_of_secondXHR
//     }).done(function(data) {
//       resolve(data);
//     }).fail(function(xhr, status, error) {
//       reject(error);
//     });
//   })
// };

// /*
//   Now we use those Promises to describe the order of execution, 
//   and how data flows between each one.

//   Note how the resolve callback function, itself, returns another
//   promise. This is how you can chain promises, and dictate the
//   order of execution of multiple aynschronous operations.
//  */
// var catArray = [];

// loadCategories()
//   .then(function(data1) {
//     console.log("data1", data1);
//     catArray.push(data1.categories)
//     return loadTypes(data1);
//   })
//   .then(function(data2) {
//    catArray.push(data2.types);
//     return loadProducts(data2);
//   }).then(function(data3){
//     catArray.push(data3.products);
//     console.log("catArray: ", catArray)
//   });
