/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: script.js
*/





 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 // Your initial comment section

// Declare a variable named menuItems containing the collection of HTML elements belonging to the menuItem class
var menuItems = document.getElementsByClassName("menuItem");

// Assuming menuItems is a collection of DOM elements
var menuItems = document.getElementsByClassName("menu-item");

for (var i = 0; i < menuItems.length; i++) {
    // Add event listener to each menu item
    menuItems[i].addEventListener("click", function() {
        calcTotal();
    });
}

function calcTotal() {
    // Your code to calculate the total goes here
    console.log("calcTotal function called");
}

function calcTotal() {
      // Declare the orderTotal variable, setting its initial value to 0.
      let orderTotal = 0;
  
      // Create a for loop that loops through the contents of the menuItems collection.
      for (let i = 0; i < menuItems.length; i++) {
          // For menuItems[i] (where i is the counter), apply an if statement that tests whether the item has been checked.
          if (menuItems[i].checked) {
              // If true, increase the value of the orderTotal variable by the value of menuItems[i].
              orderTotal += Number(menuItems[i].value);
          }
      }
  
      // After the for loop, insert a command to change the innerHTML property of the element with the id "billTotal" to the value returned by the formatCurrency() function using orderTotal as the parameter value.
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }

  
