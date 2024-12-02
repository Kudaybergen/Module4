// Array of names
var names = ["John", "Alice", "Bob", "Jessica", "Tom", "Jerry", "Sophia", "David"];

// Function to print Hello or Goodbye based on the name's starting letter
function sayHelloOrGoodbye(names) {
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase(); // Get the first letter and convert it to lowercase
        if (firstLetter === 'j') {
            console.log("Goodbye " + names[i]);
        } else {
            console.log("Hello " + names[i]);
        }
    }
}

// Call the function
sayHelloOrGoodbye(names);
