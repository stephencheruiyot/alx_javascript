// Function to validate the password
function validatePassword() {
    // Get the password input element by its id
    let passwordInput = document.getElementById("password");
    
    // Get the error paragraph element by its id
    let errorElement = document.getElementById("error");

    // Regular expressions for validation
    let lengthRegex = /.{8,}/;            // At least 8 characters
    let uppercaseRegex = /[A-Z]/;         // At least one uppercase letter
    let lowercaseRegex = /[a-z]/;         // At least one lowercase letter
    let digitRegex = /\d/;                // At least one digit
    let specialCharRegex = /[!@#$%^&*]/;  // At least one special character

    // Get the value of the password input field
    let password = passwordInput.value;

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
    if (!validatePassword()) {
        event.preventDefault();
    }
});
