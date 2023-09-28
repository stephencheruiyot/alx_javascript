 # HTML and JavaScript Form Validation Code Snippets

This repository contains several HTML and JavaScript code snippets that demonstrate different ways to validate form input. Each snippet is contained in its own HTML file, and the corresponding JavaScript code is included in a separate `.js` file.

## 0-password-strength.js

This code snippet shows how to validate a password using regular expressions. The password must meet the following criteria:

* At least 8 characters long
* At least one uppercase letter
* At least one lowercase letter
* At least one digit
* At least one special character

The JavaScript code for this snippet is as follows:

```javascript
// Function to validate the password
function validatePassword() {
    // Get the password input element by its id
    var passwordInput = document.getElementById("password");
    
    // Get the error paragraph element by its id
    var errorElement = document.getElementById("error");

    // Regular expressions for validation
    var lengthRegex = /.{8,}/;            // At least 8 characters
    var uppercaseRegex = /[A-Z]/;         // At least one uppercase letter
    var lowercaseRegex = /[a-z]/;         // At least one lowercase letter
    var digitRegex = /\d/;                // At least one digit
    var specialCharRegex = /[!@#$%^&*]/;  // At least one special character

    // Get the value of the password input field
    var password = passwordInput.value;

    // Check if the password meets all criteria
    if (
        lengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    ) {
        // If the password is valid, clear any previous error message
        errorElement.textContent = "";
        return true; // Allow form submission
    } else {
        // If the password is invalid, display an error message
        errorElement.textContent = "Password must meet all criteria.";
        return false; // Prevent form submission
    }
}

// Add an event listener to the form to trigger password validation on submit
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    // Call the validatePassword function and prevent form submission if it returns false
    

Generated by [BlackboxAI](https://www.useblackbox.ai)