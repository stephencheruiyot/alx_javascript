document.addEventListener("DOMContentLoaded", function () {
    // Get the form and error message elements by their IDs
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorElement = document.getElementById("error");
  
    // Function to validate email format
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }
  
    // Handle form submission
    emailForm.addEventListener("submit", function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Retrieve the entered email value
      const enteredEmail = emailInput.value;
  
      // Validate the email format
      if (validateEmail(enteredEmail)) {
        // If the email format is correct, submit the form
        emailForm.submit();
      } else {
        // If the email format is incorrect, display an error message
        errorElement.textContent = "Please enter a valid email address.";
      }
    });
  });
  