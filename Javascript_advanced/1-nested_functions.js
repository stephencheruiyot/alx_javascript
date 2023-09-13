// Create a global variable
var globalVariable = "Welcome";

// Define the outer function
function outer() {
    // Alert the content of globalVariable
    alert(globalVariable);

    // Create a variable named course
    var course = "Holberton";

    // Define the inner function
    function inner() {
        // Alert the content of globalVariable and course (concatenated)
        alert(globalVariable + " " + course);

        // Create a variable named exclamation
        var exclamation = "!";

        // Define the inception function
        function inception() {
            // Alert the content of globalVariable, course, and exclamation (concatenated)
            alert(globalVariable + " " + course + exclamation);
        }

        // Call the inception function
        inception();
    }

    // Call the inner function
    inner();
}

// Call the outer function
outer();

// Call the inner function within outer
outer();

// Call the inception function within inner
// Note: To achieve the desired order of popups, we will call inception within inner within outer
