#!usr/bin/node

//function named welcome
function welcome(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    // function to display full name
    function displayFullName() {
      alert ('welcome ' + fullName +'!'); 


    }


    displayFullName();
}