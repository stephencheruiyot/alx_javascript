// Function to generate dynamic input fields
function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear existing fields
  
    for (let i = 1; i <= numFields; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.name = `field${i}`;
      input.placeholder = `Field ${i}`;
      inputContainer.appendChild(input);
    }
  }
  
  // Function to validate the form before submission
  function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const numFields = document.getElementById("numFields").value;
    const inputContainer = document.getElementById("inputContainer");
    const inputs = inputContainer.querySelectorAll("input");
  
    // Check if any of the dynamically generated fields are empty
    let isValid = true;
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        isValid = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });
  
    if (isValid) {
      // Form is valid, you can submit it here
      alert("Form submitted successfully!");
      // Uncomment the following line to submit the form programmatically
      // document.getElementById("dynamicForm").submit();
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  // Add an event listener to the form for submission
  document.getElementById("dynamicForm").addEventListener("submit", validateForm);
  
  // Add an event listener to the dropdown to generate input fields dynamically
  document.getElementById("numFields").addEventListener("change", function () {
    const numFields = parseInt(this.value);
    generateInputFields(numFields);
  });
  
  // Initialize the form with the default number of fields
  generateInputFields(1);
  