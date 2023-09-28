// Get a reference to the form element
const form = document.getElementById("submitForm");

// Function to handle form submission
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve values from form fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  // Get the values entered by the user
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Initialize a flag for validation
  let isValid = true;

  // Check if name and email fields are empty
  if (name === "") {
    displayError("Please fill in all required fields");
    isValid = false;
  }

  if (email === "") {
    displayError("Please fill in all required fields");
    isValid = false;
  }

  // If all validations pass, display success message and submit the form
  if (isValid) {
    displaySuccess("Form submitted successfully!");
    form.submit();
  }
}

// Function to display error messages
function displayError(message) {
  // Create an error message element
  const errorElement = document.createElement("p");
  errorElement.className = "error";
  errorElement.textContent = message;

  // Add the error message to the form
  form.appendChild(errorElement);
}

// Function to display success message
function displaySuccess(message) {
  // Create a success message element
  const successElement = document.createElement("p");
  successElement.className = "success";
  successElement.textContent = message;

  // Add the success message to the form
  form.appendChild(successElement);
}

// Add an event listener to the form for the submit event
form.addEventListener("submit", handleFormSubmit);
